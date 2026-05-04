import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAdminAuthCookieName, getAdminCredentials } from "@/lib/admin-auth";

export async function POST(request: Request) {
  let payload: { username?: string; password?: string };

  try {
    payload = (await request.json()) as { username?: string; password?: string };
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const { username, password } = getAdminCredentials();

  if (payload.username !== username || payload.password !== password) {
    return NextResponse.json(
      { message: "Invalid admin credentials." },
      { status: 401 }
    );
  }

  cookies().set({
    name: getAdminAuthCookieName(),
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return NextResponse.json({ message: "Login successful." });
}
