'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const cardLabel: React.CSSProperties = {
  fontSize: 9,
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  marginBottom: 8,
}

const cardTitle: React.CSSProperties = {
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 8,
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Ko sam</p>
          <h2 className="section-title">
            Nisam dizajner koji je naučio socijalne mreže.{' '}
            <span style={{ color: 'var(--red)' }}>Bilo je obrnuto.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 600 }}>
            Godine u ugostiteljstvu naučile su me jednu istinu: ljudi ti daju jednu sekundu.
            Preneo sam to u content i digitalne proizvode — svaki kadar, svaki ekran mora da
            zasluži da ostane. Danas gradim na raskrsnici iskustva sa ljudima, AI alata i
            digitalnog marketinga.
          </p>

          {/* 2-col dark cards */}
          <div className="grid-2col" style={{ marginBottom: 16 }}>
            <div className="card-dark">
              <p style={{ ...cardLabel, color: 'rgba(255,255,255,0.4)' }}>Mentalitet</p>
              <p style={{ ...cardTitle, color: '#fff' }}>Estetika sa namerom</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)' }}>
                Svaka vizuelna odluka služi cilju. Hook prvo. Priča drugo. CTA treće. Uvek tim redom.
              </p>
            </div>
            <div className="card-dark">
              <p style={{ ...cardLabel, color: 'rgba(255,255,255,0.4)' }}>Pristup</p>
              <p style={{ ...cardTitle, color: '#fff' }}>AI-asistovano, ljudski vođeno</p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)' }}>
                Koristim AI da idem 3x brže — ali kreativna odluka je uvek moja. Alati nemaju
                ukus. Ja imam.
              </p>
            </div>
          </div>

          {/* Full-width light card */}
          <div className="card">
            <p style={{ ...cardLabel, color: 'var(--ink-3)' }}>Oblast fokusa</p>
            <p style={{ ...cardTitle, color: 'var(--ink)' }}>
              Ugostiteljstvo, lokalni biznis, digitalni alati
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              Razumem poslovni kontekst iza sadržaja i softvera — jer sam u industriji radio.
              To se ne uči na kursu dizajna.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
