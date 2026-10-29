"use server";

import { revalidatePath } from "next/cache";
import { checkPassword, createSession, destroySession } from "@/lib/auth";

export async function loginAction(prevState: { error?: string } | null, formData: FormData) {
  const password = formData.get("password") as string;
  if (!password) {
    return { error: "Password is required" };
  }

  const isValid = checkPassword(password.trim());
  if (!isValid) {
    return { error: "Invalid password. Access restricted to Rishikesh." };
  }

  await createSession();
  revalidatePath("/");
  return { success: true };
}

export async function logoutAction() {
  await destroySession();
  revalidatePath("/");
}
