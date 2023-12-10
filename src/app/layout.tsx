import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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
      <body className={inter.className}>
        <div className='overflow-x-hidden font-sans flex h-full bg-gray-300 dark:bg-black'>
          <div className='flex w-full'>
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
