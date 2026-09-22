import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import './globals.css'
import './print.css'

const cinzel = Cinzel({
  // latin-ext je obavezan: nosi č ć š ž đ. Bez njega dijakritike
  // padaju u fallback i lome se usred reči.
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

// Apsolutni URL sajta — OG slika mora da bude apsolutna da bi je WhatsApp,
// LinkedIn i Viber dovukli. Vercel u produkciji sam postavlja
// VERCEL_PROJECT_PRODUCTION_URL; NEXT_PUBLIC_SITE_URL ga nadjačava
// (npr. kad se veže sopstveni domen).
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return 'https://portfolio-milos.vercel.app'
}

const siteUrl = resolveSiteUrl()
const title = 'Miloš Stamenković — Social Media Manager & Content Strateg'
const description =
  'Instagram i TikTok strategija, short-form produkcija i analitika pretvorena u akciju. 76.705 pregleda i 660 novih pratilaca iz jedne organske objave.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Miloš Stamenković — Portfolio',
    title,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={`${cinzel.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
