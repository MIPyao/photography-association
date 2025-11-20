import { config } from "dotenv";
import { resolve } from "path";

// 加载 .env 和 .env.local 文件
config({ path: resolve(process.cwd(), ".env") });
config({ path: resolve(process.cwd(), ".env.local") });

import mongoose, { Schema } from "mongoose";
import { parseArgs } from "node:util";
// @ts-ignore - bcryptjs types may not be available, but it works at runtime
import bcrypt from "bcryptjs";

// 直接定义 User 模型，避免导入 server-only 依赖
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "editor", "member"],
      default: "admin",
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    avatarUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserModel = (mongoose.models.User ||
  mongoose.model("User", UserSchema)) as mongoose.Model<any>;

type SeedOptions = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "editor" | "member";
  overwrite: boolean;
  mongodbUri: string;
};

function resolveOptions(): SeedOptions {
  const { values } = parseArgs({
    options: {
      name: { type: "string" },
      email: { type: "string" },
      password: { type: "string" },
      role: { type: "string" },
      overwrite: { type: "boolean", default: false },
      mongodbUri: { type: "string" },
    },
    allowPositionals: false,
  });

  const name =
    values.name ?? process.env.SEED_ADMIN_NAME ?? "Site Administrator";
  const email = values.email ?? process.env.SEED_ADMIN_EMAIL;
  const password = values.password ?? process.env.SEED_ADMIN_PASSWORD;
  const role = (values.role ?? process.env.SEED_ADMIN_ROLE ?? "admin") as
    | "admin"
    | "editor"
    | "member";
  const overwrite =
    values.overwrite ?? process.env.SEED_ADMIN_OVERWRITE === "true";
  const mongodbUri = values.mongodbUri ?? process.env.MONGODB_URI;

  if (!email) {
    throw new Error(
      "Missing admin email. Pass --email or set SEED_ADMIN_EMAIL."
    );
  }

  if (!password) {
    throw new Error(
      "Missing admin password. Pass --password or set SEED_ADMIN_PASSWORD."
    );
  }

  if (!["admin", "editor", "member"].includes(role)) {
    throw new Error(`Invalid role "${role}". Use admin | editor | member.`);
  }

  if (!mongodbUri) {
    console.error("\n❌ Error: Missing MONGODB_URI");
    console.error("\nPlease provide MongoDB URI in one of the following ways:");
    console.error("  1. Set MONGODB_URI environment variable");
    console.error(
      "  2. Create a .env or .env.local file with MONGODB_URI=mongodb://..."
    );
    console.error("  3. Pass --mongodb-uri as a command line argument");
    console.error("\nExample:");
    console.error(
      '  pnpm seed -- --email admin@example.com --password "ChangeMe123!" --mongodb-uri "mongodb://localhost:27017"'
    );
    throw new Error("Missing MONGODB_URI environment variable");
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password.trim(),
    role,
    overwrite: Boolean(overwrite),
    mongodbUri,
  };
}

async function main() {
  const options = resolveOptions();

  const dbName = process.env.DB_NAME ?? "photography-association";

  // 连接数据库
  console.info("Connecting to database...");
  await mongoose.connect(options.mongodbUri, { dbName });

  console.info("Seeding administrator user...");

  // 查找现有用户
  const existing = await UserModel.findOne({ email: options.email });

  if (existing) {
    if (!options.overwrite) {
      console.info(
        `User "${options.email}" already exists. Skipping (pass --overwrite to update).`
      );
      return;
    }

    // 更新现有用户
    const passwordHash = await bcrypt.hash(options.password, 10);
    const updated = await UserModel.findByIdAndUpdate(
      existing._id,
      {
        name: options.name,
        role: options.role,
        passwordHash,
      },
      { new: true }
    );

    console.info(
      `Updated existing user "${updated?.email}" with role ${updated?.role}.`
    );
    return;
  }

  // 创建新用户
  const passwordHash = await bcrypt.hash(options.password, 10);
  const created = await UserModel.create({
    name: options.name,
    email: options.email,
    passwordHash,
    role: options.role,
    status: "active",
  });

  console.info(`Created user "${created.email}" with role ${created.role}.`);
}

main()
  .catch((error) => {
    console.error("Failed to seed admin user:");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });
