import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NordFitness',
  description: 'Gimnasio y CrossFit - NordFitness',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-gray-900 text-white p-4 flex justify-between">
          <h1 className="font-bold text-xl">NordFitness</h1>
          <nav>
            <a href="/" className="mr-4 hover:underline">Inicio</a>
            <a href="/membresias" className="mr-4 hover:underline">Membresías</a>
            <a href="/contacto" className="hover:underline">Contacto</a>
          </nav>
        </header>

        <main className="p-8">{children}</main>

        <footer className="bg-gray-900 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} NordFitness. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  )
}
