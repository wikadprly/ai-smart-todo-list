import { notImplemented } from "@/lib/api-response";

export async function POST() {
  return notImplemented({
    feature: "auth",
    endpoint: "POST /api/auth/logout",
    owner: "Wika",
  });
}
