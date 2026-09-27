import { FEATURES } from "@/config/features";

/**
 * Halaman sementara untuk memastikan project bisa dijalankan.
 * Sengaja dibuat polos tanpa desain: UI/UX dikerjakan terpisah nanti.
 */
export default function Home() {
  return (
    <main>
      <h1>AI Smart To-Do List</h1>

      <p>
        Pondasi project sudah siap. Halaman ini hanya placeholder untuk
        memastikan Next.js, PostgreSQL, dan Prisma berjalan.
      </p>

      <h2>Fitur &amp; Penanggung Jawab</h2>
      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Penanggung jawab</th>
            <th>Modul</th>
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((feature) => (
            <tr key={feature.key}>
              <td>{feature.title}</td>
              <td>{feature.owner}</td>
              <td>{feature.module}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cek Koneksi</h2>
      <p>
        Buka <code>/api/health</code> untuk memastikan server jalan, dan{" "}
        <code>/api/tasks</code> untuk melihat contoh endpoint yang belum
        diimplementasikan (respons 501).
      </p>
    </main>
  );
}
