import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "东城区摄影家协会",
  description: "东城区摄影家协会官方网站 - 传承摄影艺术，记录美好时光",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
