'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Brand Kit',
    body: 'Jednom napravljeno, zauvek korisno. Fontovi, boje, logo, reupotrebljivi elementi. Tvoj brend ostaje zaključan — nema više "koja je to plava boja?"',
  },
  {
    title: 'Sistem Templeta',
    body: '20–50 custom templeta. Reels, Stories, Carousel, Thumbnail. Klijent ih uređuje sam bez dizajnera.',
  },
  {
    title: 'Canva AI',
    body: 'Magic Studio workflow. Uklanjanje pozadine, Magic Write, text-to-image. 3x brža isporuka.',
  },
  {
    title: 'Video u Canvi',
    body: 'Reels bez Premiere-a. Tranzicije, beat sync, auto-titlovi, B-roll.',
  },
]

const skills = [
  { label: 'Vizuelni dizajn i layout', pct: 95 },
  { label: 'Arhitektura brand sistema', pct: 90 },
  { label: 'Video i animacija', pct: 80 },
  { label: 'Canva AI funkcije', pct: 88 },
]

export default function Canva() {
  return (
    <section id="canva" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Canva ekspertiza</p>
          <h2 className="section-title">
            Canva nije alat. U pravim rukama —{' '}
            <span style={{ color: 'var(--red)' }}>sistem.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Svako može da prevlači i pušta. Izgraditi brand sistem koji radi na 50 templeta,
            ostaje konzistentan i stvarno štedi vreme — to je drugačija veština.
          </p>
        </motion.div>

        {/* 2x2 cards */}
        <div className="grid-2col" style={{ marginBottom: 48 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 15,
                  color: 'var(--ink)',
                  marginBottom: 8,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{c.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="divider" />

        {/* Skill bars */}
        <div>
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ marginBottom: 18 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 14, color: 'var(--ink)' }}>{s.label}</span>
                <span
                  style={{
                    fontSize: 13,
                    color: 'var(--ink-3)',
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {s.pct}%
                </span>
              </div>
              <div style={{ height: 3, background: 'var(--paper-3)', borderRadius: 2 }}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
                  style={{ height: 3, background: 'var(--ink)', borderRadius: 2, width: `${s.pct}%`, transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
