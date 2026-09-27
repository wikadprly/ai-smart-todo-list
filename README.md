# AI Smart To-Do List

Aplikasi web untuk membantu pengguna mengelola, mengatur, dan menjadwalkan tugas
dengan memanfaatkan teknologi Kecerdasan Buatan.

Pengguna dapat memasukkan tugas menggunakan bahasa natural. AI kemudian membantu
mengubah input tersebut menjadi data tugas yang terstruktur, menentukan kategori
dan prioritas, serta memecah tugas menjadi beberapa subtugas.

## Tujuan

Project ini dikembangkan sebagai tugas kelompok mata kuliah Rekayasa
Kecerdasan Buatan di Program Studi D3 Teknik Informatika, Politeknik Negeri
Semarang.

## Fitur Utama

1. **Authentication** — register, login, logout, session pengguna.
2. **Task Management** — tambah, lihat, ubah, hapus, tandai selesai.
3. **AI Task Input** — mengubah input bahasa natural menjadi data tugas terstruktur.
4. **Task Categorization** — menentukan kategori tugas (Academic, Work, Personal,
   Health, Learning, Finance, dan lain-lain).
5. **Priority Recommendation** — rekomendasi prioritas High, Medium, atau Low.
6. **Task Breakdown** — memecah tugas besar menjadi beberapa subtugas.
7. **Calendar & Schedule** — menampilkan dan mengelola tugas berdasarkan waktu.
8. **Dashboard & Progress** — ringkasan tugas dan progress pengguna.

## Teknologi

- **Next.js 16** (App Router)
- **JavaScript** — bukan TypeScript
- **Node.js 20.9+**
- **PostgreSQL**
- **Prisma ORM 7**
- **zod** — validasi input
- **Git & GitHub**

## Menjalankan Project

```bash
# 1. Install dependency
npm install

# 2. Siapkan environment variable
cp .env.example .env          # Windows: copy .env.example .env
# lalu isi DATABASE_URL sesuai PostgreSQL lokal kamu

# 3. Buat tabel di database
npm run db:migrate

# 4. Isi data kategori dasar
npm run db:seed

# 5. Jalankan
npm run dev
```

Buka `http://localhost:3000`.

Command lain yang berguna:

| Command               | Kegunaan                                  |
| --------------------- | ----------------------------------------- |
| `npm run db:generate` | Regenerate Prisma Client setelah ubah schema |
| `npm run db:studio`   | Buka Prisma Studio untuk lihat data       |
| `npm run lint`        | Jalankan ESLint                           |
| `npm run build`       | Build production                          |

## Struktur Project

```
ai-smart-todo-list/
├── prisma/
│   ├── schema.prisma        # definisi tabel & relasi
│   └── seed.js              # data awal (kategori dasar)
├── prisma.config.mjs        # konfigurasi Prisma CLI
├── public/
├── src/
│   ├── app/                 # routing: halaman & API route handler
│   │   └── api/             # endpoint backend
│   ├── config/
│   │   └── features.js      # registry fitur + penanggung jawab
│   ├── lib/                 # infra bersama (tidak diubah per fitur)
│   │   ├── prisma.js        # Prisma Client singleton
│   │   ├── api-response.js  # format response & error handler
│   │   ├── api-error.js     # kelas error
│   │   └── env.js           # pembacaan environment variable
│   └── modules/             # satu folder per fitur
│       ├── auth/            # Wika
│       ├── tasks/           # Fauzan
│       ├── ai-input/        # Faqih
│       ├── categorization/  # Atha
│       ├── priority/        # Haikal
│       ├── breakdown/       # Amel
│       ├── schedule/        # Arkan
│       └── dashboard/       # Nopal
└── README.md
```

### Pembagian tanggung jawab

- `src/app` — hanya routing. Tidak ada query database di sini.
- `src/modules` — logika bisnis dan query database, milik tiap anggota.
- `src/lib` — infrastruktur bersama. Jangan diubah tanpa kesepakatan tim.

## Konsep Integrasi AI

AI digunakan untuk membantu pengguna memahami dan mengolah input tugas berbasis
bahasa natural.

Alur utama:

```
User Input
  → AI Processing
  → Structured Task Data
  → Task Management
  → Calendar & Schedule
```

Contoh input:

> "Aku harus menyelesaikan laporan jaringan sebelum Jumat, kira-kira butuh 3 jam."

AI dapat mengolah input tersebut menjadi informasi terstruktur seperti:

- Judul tugas
- Kategori
- Prioritas
- Deadline
- Estimasi durasi

Setiap pemanggilan AI dicatat di tabel `ai_logs` (input, output, provider, model,
durasi, status) supaya bisa dievaluasi dan dilaporkan.

Integrasi AI **belum** diimplementasikan pada tahap ini. Yang sudah disiapkan:

- Variabel environment di `.env.example` (`AI_PROVIDER`, `GEMINI_API_KEY`,
  `GEMINI_MODEL`, `OPENAI_API_KEY`, `OPENAI_MODEL`) — API key kosong.
- Tabel `ai_logs` di `prisma/schema.prisma`.
- Folder modul dan endpoint placeholder untuk tiap fitur AI.
- `isAiProviderReady()` di `src/lib/env.js` untuk mengecek konfigurasi.

## Pembagian Tugas Kelompok

| Anggota | Fitur                | Modul                     |
| ------- | -------------------- | ------------------------- |
| Wika    | Authentication       | `src/modules/auth`        |
| Fauzan  | Task Management      | `src/modules/tasks`       |
| Faqih   | AI Task Input        | `src/modules/ai-input`    |
| Atha    | Task Categorization  | `src/modules/categorization` |
| Haikal  | Priority Recommendation | `src/modules/priority`  |
| Amel    | Task Breakdown       | `src/modules/breakdown`   |
| Arkan   | Calendar & Schedule  | `src/modules/schedule`    |
| Nopal   | Dashboard & Progress | `src/modules/dashboard`   |

## Database

| Model      | Fungsi                              | Pemilik         |
| ---------- | ----------------------------------- | --------------- |
| `User`     | Akun pengguna                       | Wika            |
| `Session`  | Sesi login aktif                    | Wika            |
| `Task`     | Tugas utama                         | Fauzan          |
| `Category` | Kategori tugas                      | Atha            |
| `Subtask`  | Subtasks hasil Task Breakdown       | Amel            |
| `Schedule` | Slot waktu untuk menjalankan task   | Arkan           |
| `AiLog`    | Log pemanggilan AI                  | Semua modul AI  |

## Status Pengembangan

Project masih dalam tahap **pondasi (initial setup)**:

- [x] Next.js + JavaScript
- [x] Konfigurasi PostgreSQL + Prisma
- [x] Schema database
- [x] Struktur folder modular
- [x] Endpoint placeholder untuk 8 fitur
- [x] README
- [ ] Implementasi Authentication (Wika)
- [ ] Implementasi Task Management (Fauzan)
- [ ] Integrasi AI Task Input (Faqih)
- [ ] Task Categorization (Atha)
- [ ] Priority Recommendation (Haikal)
- [ ] Task Breakdown (Amel)
- [ ] Calendar & Schedule (Arkan)
- [ ] Dashboard & Progress (Nopal)
- [ ] UI/UX (dikerjakan terpisah, belum ada desain final)

UI/UX dan implementasi fitur akan dikembangkan secara bertahap berdasarkan
hasil perancangan sistem dan pembagian tugas kelompok.

## Cara Kerja Sama

- Bekerja di branch sendiri, jangan langsung ke `main`.
- Satu fitur = satu folder modul = satu pull request.
- Kalau butuh kolom database baru, buat migration baru
  (`npm run db:migrate`), jangan edit manual tabel yang sudah ada.
- Format response API harus konsisten. Ikuti `ok()` / `created()` / `fail()`
  dari `src/lib/api-response.js`.
- Jangan commit `.env`. Cukup `.env.example`.
