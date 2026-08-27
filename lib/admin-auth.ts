import { env } from "cloudflare:workers";
import { notFound } from "next/navigation";

import {
  getChatGPTUser,
  requireChatGPTUser,
  type ChatGPTUser,
} from "@/app/chatgpt-auth";

type RuntimeEnvironment = {
  ADMIN_EMAILS?: string;
};

function configuredAdminEmails() {
  const runtimeEnvironment = env as unknown as RuntimeEnvironment;

  return new Set(
    (runtimeEnvironment.ADMIN_EMAILS ?? "")
      .split(/[;,\n]/)
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function isAdminEmail(email: string) {
  return configuredAdminEmails().has(email.trim().toLowerCase());
}

export async function requireAdminUser(returnTo: string): Promise<ChatGPTUser> {
  const user = await requireChatGPTUser(returnTo);

  if (!isAdminEmail(user.email)) {
    notFound();
  }

  return user;
}

export async function getAdminUser(): Promise<ChatGPTUser | null> {
  const user = await getChatGPTUser();
  return user && isAdminEmail(user.email) ? user : null;
}
