import { notImplemented } from "@/lib/api-response";

export async function GET(request, { params }) {
  const { taskId } = await params;
  return notImplemented({
    feature: "tasks",
    endpoint: `GET /api/tasks/${taskId}`,
    owner: "Fauzan",
  });
}

export async function PATCH(request, { params }) {
  const { taskId } = await params;
  return notImplemented({
    feature: "tasks",
    endpoint: `PATCH /api/tasks/${taskId}`,
    owner: "Fauzan",
  });
}

export async function DELETE(request, { params }) {
  const { taskId } = await params;
  return notImplemented({
    feature: "tasks",
    endpoint: `DELETE /api/tasks/${taskId}`,
    owner: "Fauzan",
  });
}
