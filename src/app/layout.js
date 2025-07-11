// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raos Saji - Rasa Asli dalam Setiap Sajian",
  description:
    "Raos Saji adalah brand makanan yang mengusung cita rasa khas Indonesia dengan sentuhan modern.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
