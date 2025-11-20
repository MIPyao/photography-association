import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "editor", "member"], default: "admin" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    avatarUrl: { type: String },
  },
  {
    timestamps: true,
  }
)

export const UserModel = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<any>

