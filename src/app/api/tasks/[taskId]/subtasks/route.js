import { notImplemented } from "@/lib/api-response";

export async function POST(request, { params }) {
  const { taskId } = await params;
  return notImplemented({
    feature: "breakdown",
    endpoint: `POST /api/tasks/${taskId}/subtasks`,
    owner: "Amel",
  });
}
