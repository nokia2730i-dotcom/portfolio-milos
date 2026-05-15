'use client'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Short-form Video Produkcija',
    body: 'Reels, TikTok, Shorts — od koncepta do isporuke. Hook dizajn, pacing, zvuk, titlovi. Sadržaj koji se prikazuje i koji se pamti.',
    meta: '3–10 videa/nedeljno · isporuka za 48h',
  },
  {
    num: '02',
    title: 'Canva Brand Sistem',
    body: 'Kompletan brand kit + 20–50 custom templeta. Jednom napravljeno, koristiš zauvek. Konzistencija bez dizajnera na stalnom pozivu.',
    meta: 'Brand kit · Templeti · Stil vodič',
  },
  {
    num: '03',
    title: 'AI Content Strategija',
    body: 'Mesečni content plan uz AI — hookovi, koncepti serija, caption, analiza konkurencije. Strategija pre produkcije, uvek.',
    meta: '30-dnevni plan · Hook banka · Caption copy',
  },
  {
    num: '04',
    title: 'Instagram Vizuelni Refresh',
    body: 'Grid, Highlights, Stories sistem, bio. Jedna nedelja — profil koji izgleda 10x skuplje.',
    meta: 'Audit profila · Grid sistem · Stories kit',
  },
  {
    num: '05',
    title: 'WordPress Sajtovi',
    body: 'Profesionalni sajtovi za lokalni biznis — od nule do live. SEO osnove, blog, mobile-first dizajn.',
    meta: 'WordPress · SEO · Blog · Canva',
  },
  {
    num: '06',
    title: 'Web Aplikacije i Digitalni Alati',
    body: 'Poslovni web alati deployovani na Vercelu — kalkulatori, analitički sistemi, SaaS micro-produkti za specifične industrije. Vidi: FoodCost Analiza i BizBreak.',
    meta: 'Next.js · Vercel · React · Ugostiteljstvo & biznis',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Usluge</p>
          <h2 className="section-title">
            Šest stvari koje radim{' '}
            <span style={{ color: 'var(--red)' }}>izuzetno dobro.</span>
          </h2>
        </motion.div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                display: 'flex',
                gap: 32,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 28,
                  color: 'var(--paper-3)',
                  minWidth: 52,
                  lineHeight: 1,
                  paddingTop: 3,
                }}
              >
                {s.num}
              </span>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 17,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 10 }}>
                  {s.body}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                  }}
                >
                  {s.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
