/**
 * Registry fitur tunggal untuk seluruh project.
 *
 * Dipakai oleh:
 * - halaman `src/app/page.js` untuk menampilkan status tiap fitur,
 * - README.md (dijaga manual, tapi sumbernya di sini),
 * - route API sebagai placeholder 501.
 *
 * Kalau menambah fitur baru, tambahkan di sini juga.
 */
export const FEATURES = [
  {
    key: "auth",
    title: "Authentication",
    owner: "Wika",
    module: "src/modules/auth",
    summary: "Register, login, logout, dan session pengguna.",
    endpoints: [
      "POST /api/auth/register",
      "POST /api/auth/login",
      "POST /api/auth/logout",
      "GET  /api/auth/session",
    ],
    models: ["User", "Session"],
    ai: false,
  },
  {
    key: "tasks",
    title: "Task Management",
    owner: "Fauzan",
    module: "src/modules/tasks",
    summary: "CRUD tugas, tandai selesai, dan pencarian dasar.",
    endpoints: [
      "GET    /api/tasks",
      "POST   /api/tasks",
      "GET    /api/tasks/[taskId]",
      "PATCH  /api/tasks/[taskId]",
      "DELETE /api/tasks/[taskId]",
    ],
    models: ["Task"],
    ai: false,
  },
  {
    key: "ai-input",
    title: "AI Task Input",
    owner: "Faqih",
    module: "src/modules/ai-input",
    summary: "Mengubah input bahasa natural menjadi data tugas terstruktur.",
    endpoints: ["POST /api/ai/parse"],
    models: ["AiLog"],
    ai: true,
  },
  {
    key: "categorization",
    title: "Task Categorization",
    owner: "Atha",
    module: "src/modules/categorization",
    summary: "Menentukan kategori tugas dari isi tugas.",
    endpoints: ["POST /api/ai/categorize", "GET /api/categories"],
    models: ["Category", "Task"],
    ai: true,
  },
  {
    key: "priority",
    title: "Priority Recommendation",
    owner: "Haikal",
    module: "src/modules/priority",
    summary: "Rekomendasi tingkat prioritas High / Medium / Low.",
    endpoints: ["POST /api/ai/priority"],
    models: ["Task", "AiLog"],
    ai: true,
  },
  {
    key: "breakdown",
    title: "Task Breakdown",
    owner: "Amel",
    module: "src/modules/breakdown",
    summary: "Memecah tugas besar menjadi beberapa subtugas.",
    endpoints: ["POST /api/ai/breakdown", "POST /api/tasks/[taskId]/subtasks"],
    models: ["Subtask", "AiLog"],
    ai: true,
  },
  {
    key: "schedule",
    title: "Calendar & Schedule",
    owner: "Arkan",
    module: "src/modules/schedule",
    summary: "Menampilkan dan mengelola tugas berdasarkan waktu.",
    endpoints: ["GET /api/schedules", "POST /api/schedules"],
    models: ["Schedule", "Task"],
    ai: false,
  },
  {
    key: "dashboard",
    title: "Dashboard & Progress",
    owner: "Nopal",
    module: "src/modules/dashboard",
    summary: "Ringkasan jumlah tugas dan progress pengguna.",
    endpoints: ["GET /api/dashboard"],
    models: ["Task", "Subtask", "Schedule"],
    ai: false,
  },
];

export const FEATURE_KEYS = FEATURES.map((feature) => feature.key);

export function getFeature(key) {
  return FEATURES.find((feature) => feature.key === key) ?? null;
}
