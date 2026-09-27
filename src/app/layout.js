import "./globals.css";

export const metadata = {
  title: "AI Smart To-Do List",
  description: "Aplikasi to-do list dengan bantuan Kecerdasan Buatan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
