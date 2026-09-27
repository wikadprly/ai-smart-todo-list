import { ok } from "@/lib/api-response";

export const dynamic = "force-dynamic";

export async function GET() {
  return ok({
    service: "ai-smart-todo-list",
    status: "ok",
    nodeEnv: process.env.NODE_ENV,
  });
}
