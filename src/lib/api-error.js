/**
 * Error yang dilempar oleh service layer dan ditangkap oleh route handler.
 * Format ini yang akan dibaca front-end, jadi jangan diubah tanpa kesepakatan.
 */
export class ApiError extends Error {
  constructor(message, { status = 400, code = "BAD_REQUEST", details = null } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const badRequest = (message, details) =>
  new ApiError(message, { status: 400, code: "BAD_REQUEST", details });

export const unauthorized = (message = "Anda harus login terlebih dahulu.") =>
  new ApiError(message, { status: 401, code: "UNAUTHORIZED" });

export const forbidden = (message = "Anda tidak punya akses ke resource ini.") =>
  new ApiError(message, { status: 403, code: "FORBIDDEN" });

export const notFound = (message = "Data tidak ditemukan.") =>
  new ApiError(message, { status: 404, code: "NOT_FOUND" });
