import { PrismaClient } from "@prisma/client";

/**
 * Prisma Client singleton.
 *
 * Next.js memuat ulang modul saat hot-reload di mode dev. Tanpa pola ini,
 * setiap reload membuka koneksi database baru sampai koneksi habis.
 */

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
export default prisma;
