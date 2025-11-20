import "server-only"

import mongoose from "mongoose"

import { env } from "@/lib/config/env"

declare global {
  // eslint-disable-next-line no-var
  var __mongooseConn: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  } | undefined
}

const globalCache = global.__mongooseConn ?? {
  conn: null,
  promise: null,
}

export async function connectMongo() {
  if (globalCache.conn) {
    return globalCache.conn
  }

  if (!globalCache.promise) {
    globalCache.promise = mongoose.connect(env.mongodbUri, {
      dbName: process.env.DB_NAME ?? "photography-association",
    })
  }

  globalCache.conn = await globalCache.promise
  global.__mongooseConn = globalCache

  return globalCache.conn
}

