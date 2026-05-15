'use client'
import { motion } from 'framer-motion'

const featured = [
  {
    badge: 'WEB APP · FEATURED',
    url: 'https://fodcost-analiza.vercel.app/',
    bg: '#0f1a0f',
    title: 'FoodCost Analiza',
    sub: 'SaaS platforma · Ugostiteljstvo · Next.js · Vercel · Besplatno',
    body: 'Kompletna platforma za analizu poslovanja restorana — food cost, recepture, nedeljni unosi i godišnji trendovi na jednom mestu. Nastala iz iskustva: vlasnici restorana godinama ne znaju tačno koliko ih košta svako jelo. Ovaj alat to rešava za 5 minuta podešavanja.',
    features: [
      'Dashboard (finansijski pregled u realnom vremenu)',
      'Kalkulator recepture (food cost po porciji sa otpadom)',
      'Menu Engineering (analiza profitabilnosti jela)',
      'Godišnji trend (vizualizacija rasta kroz mesece)',
    ],
    kpi: 'Next.js · Auth sistem · Dashboard · Besplatno uvek',
  },
  {
    badge: 'WEB APP · FEATURED',
    url: 'https://bizbreak-ten.vercel.app/',
    bg: '#0d1a2e',
    title: 'BizBreak v2.0',
    sub: 'Kalkulator tačke rentabilnosti · PDV · Scenariji · PDF Export · 4 valute · 3 jezika',
    body: 'Profesionalni kalkulator tačke rentabilnosti za srpsko tržište — jedini sa punom PDV analizom za obveznike i neobveznike, viševalutnom podrškom i PDF exportom izveštaja. Multilingual: srpski, engleski, hrvatski. Za preduzetnike kojima treba odgovor: "Koliko moram da prodam da ne gubim?"',
    features: [
      'PDV analiza (obveznici i neobveznici)',
      'Scenariji (optimistični/realistični/pesimistični)',
      'PDF export izveštaja',
      '4 valute (RSD/EUR/USD/BAM)',
      '3 jezika',
      'Dinamično dodavanje troškova',
    ],
    kpi: 'Vercel · PDF Export · 4 valute · 3 jezika · PDV logika',
  },
]

const standard = [
  {
    badge: 'WORDPRESS',
    url: 'https://glamorous-paws.com/',
    bg: '#1a1a2e',
    title: 'Glamorous Paws',
    sub: 'Grooming salon · WordPress · Blog · SEO · Niš & Aleksinac',
    body: 'Salon za negu pasa sa dve lokacije. Kompletan WordPress sajt od nule — dizajn, navigacija, blog sa SEO-optimizovanim tekstovima o nezi i šišanju pasa. Klijent dobio sajt koji izgleda profesionalno i koji sam ažurira kroz blog.',
    kpi: 'WordPress · 3 blog posta · SEO · 2 lokacije · Klijent ga sam ažurira',
    blogs: [
      { label: '"Za sve ljubitelje Bišona"', href: 'https://glamorous-paws.com/?p=516' },
      { label: '"Zašto je važno voditi ljubimca na sređivanje"', href: 'https://glamorous-paws.com/?p=6' },
      { label: '"Skidanje kamenca i farbanje dlaka"', href: 'https://glamorous-paws.com/?p=780' },
    ],
  },
  {
    badge: 'WORDPRESS',
    url: 'https://tehnickipregled-xl.rs/',
    bg: '#0f1f0a',
    title: 'Tehnički Pregled XL',
    sub: 'Lokalni servis · WordPress · Kalkulator registracije · FAQ',
    body: 'Servis za tehnički pregled, registraciju i osiguranje vozila. Kompletan WordPress sajt sa svim uslugama, kalkulatorom registracije, radnim vremenom, FAQ sekcijom i kontakt podacima. Mobile-first dizajn koji lokalne mušterije mogu brzo da skeniraju.',
    kpi: 'WordPress · Kalkulator · Mobilni first · FAQ · Višestruke usluge',
  },
  {
    badge: 'AI CONTENT',
    url: 'https://www.youtube.com/@milosstamenkovic888',
    bg: '#1f0a0a',
    title: 'AI Mediteranska Muzika',
    sub: 'Suno AI · Originalne pesme · Greek pop stil · YouTube kanal',
    body: 'Originalni YouTube kanal sa AI-generisanom mediteranskom muzikom. Pesme kreirane kombinacijom Suno AI i ličnih ideja i uređivanja tekstova. Mediteranski zvukovi, grčki stihovi, romantične priče — niche kanal za ljubitelje grčke muzike i mora.',
    kpi: 'Suno AI · Shorts format · Originalni kanal · AI + human editing',
  },
  {
    badge: 'SOCIAL MEDIA',
    url: 'https://www.instagram.com/konobarignite/',
    bg: '#1a0f1a',
    title: '@konobarignite',
    sub: 'Ugostiteljstvo · Lični brend · Instagram · Short-form content',
    body: 'Instagram profil na raskrsnici ugostiteljske kulture i digitalnog marketinga. Autentičan glas koji gradi publiku u nišu ugostiteljstva — Reels, Stories, edukativni sadržaj o industriji. Lični brend izgrađen iz iskustva, ne iz teorije.',
    kpi: 'Ugostiteljski niche · Reels format · Lični brend · Instagram strategija',
  },
]

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Odabrani projekti</p>
          <h2 className="section-title">
            Rad koji pomera metrike —{' '}
            <span style={{ color: 'var(--red)' }}>ne samo Instagram lajkove.</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        {featured.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ outline: '1px solid #c0392b' }}
            style={{
              display: 'block',
              background: p.bg,
              borderRadius: 4,
              padding: '36px 32px',
              marginBottom: 16,
              textDecoration: 'none',
              cursor: 'pointer',
              border: '1px solid transparent',
              transition: 'border-color 0.2s',
            }}
          >
            <p className="badge">{p.badge}</p>
            <h3
              style={{
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                fontWeight: 800,
                fontSize: 26,
                color: '#fff',
                marginBottom: 6,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.38)',
                marginBottom: 20,
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {p.sub}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.72)', marginBottom: 20, maxWidth: 680 }}>
              {p.body}
            </p>
            <ul style={{ marginBottom: 20, paddingLeft: 0, listStyle: 'none' }}>
              {p.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.52)',
                    marginBottom: 5,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}
                >
                  <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: 1 }}>·</span>
                  {f}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 9,
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              {p.kpi}
            </p>
          </motion.a>
        ))}

        {/* Standard 2-col grid */}
        <div className="grid-2col">
          {standard.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: 'block',
                background: 'var(--paper)',
                border: '1px solid var(--paper-3)',
                borderRadius: 4,
                overflow: 'hidden',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              whileHover={{ borderColor: '#c0392b' }}
            >
              {/* Color accent strip */}
              <div style={{ background: p.bg, height: 5 }} />
              <div style={{ padding: 24 }}>
                <p className="badge">{p.badge}</p>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 17,
                    color: 'var(--ink)',
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 10,
                    color: 'var(--ink-3)',
                    marginBottom: 14,
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.sub}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                  {p.body}
                </p>
                {p.blogs && (
                  <div style={{ marginBottom: 14 }}>
                    {p.blogs.map((b) => (
                      <a
                        key={b.href}
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'block',
                          fontSize: 11,
                          color: 'var(--red)',
                          marginBottom: 4,
                          textDecoration: 'none',
                        }}
                      >
                        {b.label} ↗
                      </a>
                    ))}
                  </div>
                )}
                <p
                  style={{
                    fontSize: 9,
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-3)',
                  }}
                >
                  {p.kpi}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
