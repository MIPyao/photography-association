import type React from "react"
import type { Metadata, Viewport } from "next" // 最好引入 Viewport 类型
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "东城区摄影家协会",
  description: "东城区摄影家协会官方网站 - 传承摄影艺术，记录美好时光",
  generator: "v0.app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // 你可以根据需要添加 maximumScale, userScalable 等其他视口属性
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}