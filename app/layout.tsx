import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GlobalContextProvider from "./src/components/parts/calendar/context/GlobalContextProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js 30本 ノック",
  description: "勉強用に30本ノックを実践する",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      {/* カレンダー用のContextProvider */}
      <GlobalContextProvider>
        <body className={inter.className}>{children}</body>
      </GlobalContextProvider>
    </html>
  )
}
