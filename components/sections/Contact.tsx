'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--paper-2)', padding: '80px 24px 100px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Hajde da radimo</p>
          <h2 className="section-title">
            Tvoj brend zaslužuje da ga vide{' '}
            <span style={{ color: 'var(--red)' }}>pravi ljudi.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Slobodan za 2–3 nova projekta mesečno. Radim dugoročno — sajtovi, web aplikacije,
            content sistemi. Discovery call je besplatan, 30 minuta, i do kraja ćemo znati da
            li ima smisla.
          </p>
        </motion.div>

        {/* 4 contact cards */}
        <div className="grid-2col" style={{ marginBottom: 16 }}>
          {[
            { label: 'Instagram', val: '@milos.ugostitelj', href: 'https://www.instagram.com/milos.ugostitelj/' },
            { label: 'YouTube', val: '@milosstamenkovic888', href: 'https://www.youtube.com/@milosstamenkovic888' },
            { label: 'Linkversity Blog', val: 'linkversity.hr/blog/author/milos', href: 'https://linkversity.hr/blog/author/milos/' },
            { label: 'Odziv', val: 'U roku od 24h radnim danima', href: null },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card">
                    <p
                      style={{
                        fontSize: 9,
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-3)',
                        marginBottom: 8,
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 800,
                        fontSize: 14,
                        color: 'var(--red)',
                      }}
                    >
                      {c.val}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="card">
                  <p
                    style={{
                      fontSize: 9,
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-3)',
                      marginBottom: 8,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 14,
                      color: 'var(--ink)',
                    }}
                  >
                    {c.val}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid-2col" style={{ marginBottom: 24 }}>
          {[
            {
              title: 'Šta da pošalješ',
              sub: 'Jedan pasus. To je sve.',
              body: 'Šta projekat treba da uradi, okvirni rok, budžet ako ga imaš. Ako ima fit — pravimo brief zajedno.',
            },
            {
              title: 'Nije dostupno za',
              sub: 'Jednokratne logoe i spec rad',
              body: 'Fokusiran sam na projekte koji imaju smisla dugoročno.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 15,
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 10,
                  color: 'var(--ink-3)',
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: 10,
                }}
              >
                {c.sub}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{c.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Dark CTA */}
        <motion.a
          href="https://www.instagram.com/milos.ugostitelj/"
          target="_blank"
          rel="noopener noreferrer"
          {...A}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ borderColor: '#c0392b' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--ink)',
            borderRadius: 4,
            padding: '52px 24px',
            textDecoration: 'none',
            cursor: 'pointer',
            border: '1px solid transparent',
            transition: 'border-color 0.2s',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 800,
              fontSize: 22,
              color: '#fff',
              marginBottom: 8,
            }}
          >
            Pošalji poruku →
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>
            instagram.com/milos.ugostitelj
          </span>
        </motion.a>

        {/* Footer */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 11,
            color: 'var(--ink-3)',
            marginTop: 60,
            fontStyle: 'italic',
          }}
        >
          Portfolio · Miloš Stamenković · Social Media Designer & Digital Product Builder · 2025
        </p>
      </div>
    </section>
  )
}
