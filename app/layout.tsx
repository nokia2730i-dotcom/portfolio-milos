import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import './print.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Miloš Stamenković — Social Media Manager & Content Strateg',
  description:
    'Instagram i TikTok strategija, short-form produkcija i analitika pretvorena u akciju. 76.705 pregleda i 660 novih pratilaca iz jedne organske objave.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={`${syne.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
