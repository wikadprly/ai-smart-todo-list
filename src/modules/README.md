# Modul Fitur

Satu folder per fitur. Tiap anggota kelompok bekerja di foldernya sendiri supaya
jarang konflik saat git merge.

| Folder          | Fitur                   | Penanggung jawab |
| --------------- | ----------------------- | ---------------- |
| `auth`          | Authentication          | Wika             |
| `tasks`         | Task Management         | Fauzan           |
| `ai-input`      | AI Task Input           | Faqih            |
| `categorization`| Task Categorization     | Atha             |
| `priority`      | Priority Recommendation | Haikal           |
| `breakdown`     | Task Breakdown          | Amel             |
| `schedule`      | Calendar & Schedule     | Arkan            |
| `dashboard`     | Dashboard & Progress    | Nopal            |

## Isi folder modul

Folder modul sengaja dibuat kosong (hanya `index.js`) supaya tidak ada kode yang
terburu-buru ditulis. Saat mulai mengerjakan, tambahkan sendiri:

```
src/modules/<fitur>/
  index.js             -> barrel export
  <fitur>.service.js   -> query database + logika bisnis
  <fitur>.schema.js    -> validasi input (zod), bila perlu
```

## Aturan

- Query database hanya boleh ada di file `*.service.js`, bukan di route handler.
- Route handler di `src/app/api` hanya validasi input, panggil service, kirim response.
- Ambil Prisma Client lewat `import { prisma } from "@/lib/prisma"`.
- Format response konsisten: `ok()` / `created()` / `fail()` dari `@/lib/api-response`.
- Semua pemanggilan AI wajib dicatat ke tabel `ai_logs`.
- Ingin menambah fitur baru? Tambahkan juga di `src/config/features.js`.
