import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Registro de Marca en Chile – Marca Segura AyC | A&C Consultores",
  description:
    "Registra tu marca en Chile fácil, rápido y sin complicaciones. Perito INAPI certificado. Garantía registro o reembolso. Más de 35 años protegiendo ideas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
