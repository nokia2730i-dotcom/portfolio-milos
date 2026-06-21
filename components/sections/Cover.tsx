'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Cover() {
  return (
    <section
      id="cover"
      style={{
        background: 'var(--paper)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 920, margin: '0 auto', width: '100%' }}>
        <motion.div {...A}>
          <p className="eyebrow">Social Media Designer & Digital Product Builder</p>

          <h1
            style={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 7vw, 68px)',
              lineHeight: 1.1,
              color: 'var(--ink)',
              marginBottom: 24,
              maxWidth: 700,
            }}
          >
            Dizajn koji tera{' '}
            <span style={{ color: 'var(--red)' }}>prste</span> da stanu.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: 'var(--ink-2)',
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            Kreiram sadržaj koji radi posao i alate koji rešavaju probleme — short-form video,
            Canva sistemi, Reels produkcija, WordPress sajtovi i web aplikacije na Vercelu.
            Za brendove koji znaju da je pažnja najskuplja valuta.
          </p>

          {/* Red pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            {['Short-form Video', 'Instagram Reels', 'AI Content', 'Web Aplikacije'].map((p) => (
              <span key={p} className="pill-red">{p}</span>
            ))}
          </div>

          {/* Dark pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 56 }}>
            {['Canva Pro', 'WordPress', 'Vercel', 'Suno AI', 'Content Strategija'].map((p) => (
              <span key={p} className="pill-dark">{p}</span>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              borderTop: '1px solid var(--paper-3)',
              paddingTop: 32,
              marginBottom: 32,
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            {[
              ['3+', 'Godina iskustva'],
              ['7', 'Realizovana projekta'],
              ['10+', 'Blog postova'],
            ].map(([num, lbl]) => (
              <div key={lbl}>
                <div className="stat-number">{num}</div>
                <div className="stat-label">{lbl}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/milos.ugostitelj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: 'var(--ink-3)',
                textDecoration: 'none',
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              Instagram ↗
            </a>
            <a
              href="https://www.youtube.com/@milosstamenkovic888"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: 'var(--ink-3)',
                textDecoration: 'none',
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                transition: 'color 0.2s',
              }}
            >
              YouTube ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
