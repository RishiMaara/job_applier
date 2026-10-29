import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "rishi_session";
const SECRET_KEY = new TextEncoder().encode(
  process.env.SESSION_SECRET || "default_super_secret_for_local_dev_only_change_in_prod"
);

export async function createSession() {
  const token = await new SignJWT({ role: "owner", user: "rishikesh" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(SECRET_KEY);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  return token;
}

export async function getSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return false;

    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload.role === "owner";
  } catch (err) {
    return false;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export function checkPassword(candidate: string): boolean {
  const expectedPassword = process.env.ADMIN_PASSWORD || "rishi2026";
  return candidate === expectedPassword;
}
