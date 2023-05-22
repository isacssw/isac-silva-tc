import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { MyDatePicker } from '@/components/MyDatePicker'
import { Suspense } from 'react'
import Loading from './asteroids/[dates]/Loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asteroids Stack',
  description: 'Find and Check your favorite asteroid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MyDatePicker />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
