'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Brand Kit',
    body: 'Fontovi, boje, logo i reupotrebljivi elementi na jednom mestu. Nema više "koja je ono bila plava" na pola zadatka.',
  },
  {
    title: 'Sistem templeta',
    body: 'Reels, Stories, carousel, thumbnail. Ko god iz tima uzme zadatak — izlazi isti vizuelni jezik.',
  },
  {
    title: 'Canva AI',
    body: 'Magic Studio workflow: uklanjanje pozadine, Magic Write, text-to-image. Manje vremena na tehniku, više na ideju.',
  },
  {
    title: 'Video u Canvi',
    body: 'Reels bez Premiere-a. Tranzicije, beat sync, auto-titlovi, B-roll — dovoljno za dnevni tempo objava.',
  },
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
            Svako može da prevlači i pušta. Napraviti sistem u kom više ljudi objavljuje celu
            nedelju, a profil izgleda kao da ga je radila jedna ruka — to je drugačija veština.
          </p>
        </motion.div>

        {/* 2x2 cards */}
        <div className="grid-2col">
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
                  fontFamily: 'var(--font-display), Cinzel, serif',
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
      </div>
    </section>
  )
}
