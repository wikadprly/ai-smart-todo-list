import { ApiError } from "./api-error";

/**
 * Semua endpoint project ini memakai format yang sama:
 *
 *   sukses  -> { success: true, data, meta? }
 *   gagal   -> { success: false, error: { code, message, details? } }
 *
 * Ikuti format ini di route milik masing-masing agar konsisten.
 */

export function ok(data, meta) {
  return Response.json({ success: true, data, ...(meta ? { meta } : {}) });
}

export function created(data) {
  return Response.json({ success: true, data }, { status: 201 });
}

export function fail(error) {
  const isApiError = error instanceof ApiError;

  return Response.json(
    {
      success: false,
      error: {
        code: isApiError ? error.code : "INTERNAL_ERROR",
        message: isApiError ? error.message : "Terjadi kesalahan pada server.",
        ...(isApiError && error.details ? { details: error.details } : {}),
      },
    },
    { status: isApiError ? error.status : 500 },
  );
}

/**
 * Placeholder untuk route yang belum dikerjakan owning module.
 * Ganti dengan memanggil service module yang sudah tersedia.
 */
export function notImplemented({ feature, endpoint, owner }) {
  return Response.json(
    {
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message: `Endpoint "${endpoint}" (modul: ${feature}) belum diimplementasikan.`,
        details: { feature, endpoint, owner },
      },
    },
    { status: 501 },
  );
}

/** Bungkus route handler agar error jadi response JSON dan tidak bocor stack trace. */
export function withErrorHandling(handler) {
  return async (...args) => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error(`[api] ${args[0]?.url ?? "unknown"} ->`, error);
      return fail(error);
    }
  };
}

/** Baca JSON body request dengan pesan error yang konsisten. */
export async function readJsonBody(request) {
  try {
    return await request.json();
  } catch {
    throw new ApiError("Body request harus berupa JSON yang valid.", {
      status: 400,
      code: "INVALID_JSON",
    });
  }
}
