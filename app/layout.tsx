import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NordFitness",
  description: "Gimnasio de fuerza y alto rendimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* HEADER */}
        <header
          style={{
            padding: "20px",
            background: "#0d0d0d",
            color: "white",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          NordFitness
        </header>

        {/* MAIN */}
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            padding: "18px",
            background: "#0d0d0d",
            color: "white",
            textAlign: "center",
            fontSize: "14px",
            marginTop: "40px",
          }}
        >
          © {new Date().getFullYear()} NordFitness — All rights reserved
        </footer>

      </body>
    </html>
  );
}

