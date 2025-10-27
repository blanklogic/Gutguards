import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gut Guards - Defend Your Microbiome",
  description: "An educational 2D slider game about gut health and your microbiome",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${cinzel.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
