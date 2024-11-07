import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ConditionalLayout from '@/components/ConditonalLayout'
import ContextProvider from '@/utils/Context'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import ReduxLayout from '@/components/Redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Octtoppus Admin',
  description: 'ONLY ADMIN ACCESS HERE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div className=" flex flex-col">
            <ReduxLayout>
              {children} <Toaster />
            </ReduxLayout>
          </div>
        </ContextProvider>
      </body>
    </html>
  )
}
