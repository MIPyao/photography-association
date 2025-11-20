import "server-only"

import { z } from "zod"

const envSchema = z.object({
  MONGODB_URI: z.string().min(1, "Missing MONGODB_URI"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  DB_PROVIDER: z.enum(["mongo"]).default("mongo"),
  NODE_ENV: z.string().optional(),
})

const parsed = envSchema.safeParse({
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  DB_PROVIDER: process.env.DB_PROVIDER ?? "mongo",
  NODE_ENV: process.env.NODE_ENV,
})

if (!parsed.success) {
  console.error(parsed.error.flatten().fieldErrors)
  throw new Error("Invalid environment configuration")
}

export const env = {
  mongodbUri: parsed.data.MONGODB_URI,
  jwtSecret: parsed.data.JWT_SECRET,
  dbProvider: parsed.data.DB_PROVIDER,
  nodeEnv: parsed.data.NODE_ENV ?? "development",
}

