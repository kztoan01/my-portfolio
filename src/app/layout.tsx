import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tran Bao Toan - Portfolio',
  description: 'luv u',
  icons: {
    icon: [
      {
        url: "/toan.png",
        href: "/toan.png",
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
