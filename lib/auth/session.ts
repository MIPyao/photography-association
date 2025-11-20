import "server-only"

import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

import { env } from "@/lib/config/env"
import { getUserService } from "@/modules/container"
import type { SafeUser } from "@/modules/users/application/user-service"

const SESSION_COOKIE = "pa_admin_token"

interface SessionPayload {
  sub: string
  role: string
}

export function createSessionToken(payload: SessionPayload) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: "7d" })
}

export function verifySessionToken(token: string) {
  try {
    return jwt.verify(token, env.jwtSecret) as SessionPayload
  } catch {
    return null
  }
}

export async function getSessionUser(): Promise<SafeUser | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const payload = verifySessionToken(token);
  if (!payload) return null;
  const userService = getUserService();
  const user = await userService.getUserById(payload.sub);
  return user;
}

export async function requireSessionUser() {
  const user = await getSessionUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function persistSessionCookie(token: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: env.nodeEnv === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

