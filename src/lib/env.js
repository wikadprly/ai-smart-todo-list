/**
 * Pembacaan environment variable yang terpusat.
 *
 * Prisma 7 membaca DATABASE_URL lewat prisma.config.mjs, sementara Next.js
 * membaca process.env secara otomatis. File ini hanya pelengkap supaya
 * nama variabel tidak tersebar typo di banyak file.
 */

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",

  database: {
    url: process.env.DATABASE_URL,
  },

  ai: {
    provider: process.env.AI_PROVIDER ?? "",
    geminiApiKey: process.env.GEMINI_API_KEY ?? "",
    openaiApiKey: process.env.OPENAI_API_KEY ?? "",
    geminiModel: process.env.GEMINI_MODEL ?? "",
    openaiModel: process.env.OPENAI_MODEL ?? "",
  },

  session: {
    secret: process.env.SESSION_SECRET ?? "",
    maxAgeDays: Number(process.env.SESSION_MAX_AGE_DAYS ?? 7),
  },
};

export const isDev = env.nodeEnv !== "production";

/**
 * Cek apakah satu fitur AI sudah siap dipakai (provider + API key + model).
 * Modul AI memakai ini untuk menolak request dengan pesan jelas,
 * bukan diam-diam gagal karena API key kosong.
 */
export function isAiProviderReady() {
  if (env.ai.provider === "gemini") {
    return Boolean(env.ai.geminiApiKey && env.ai.geminiModel);
  }
  if (env.ai.provider === "openai") {
    return Boolean(env.ai.openaiApiKey && env.ai.openaiModel);
  }
  return false;
}
