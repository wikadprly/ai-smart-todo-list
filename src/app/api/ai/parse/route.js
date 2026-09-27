import { notImplemented } from "@/lib/api-response";

export async function POST() {
  return notImplemented({
    feature: "ai-input",
    endpoint: "POST /api/ai/parse",
    owner: "Faqih",
  });
}
