'use client'
import { motion } from 'framer-motion'

const A = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div {...A}>
          <p className="eyebrow">Šta kažu klijenti</p>
          <h2 className="section-title">
            Rezultati su jedina prezentacija{' '}
            <span style={{ color: 'var(--red)' }}>koja stvarno radi.</span>
          </h2>
        </motion.div>

        {/* Hero dark quote */}
        <motion.div
          {...A}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: 'var(--ink)',
            borderRadius: 4,
            padding: '44px 40px',
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#fff',
              fontStyle: 'italic',
              marginBottom: 24,
              maxWidth: 640,
            }}
          >
            "Razumeo je naš brend pre nego što smo završili sa objašnjavanjem. Sajt izgleda
            profesionalno, klijenti nam ga hvale — i što je najvažnije, sami ga ažuriramo."
          </p>
          <p
            style={{
              fontSize: 9,
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
            }}
          >
            Klijent — Glamorous Paws, Niš
          </p>
        </motion.div>

        {/* 2-col review cards */}
        <div className="grid-2col" style={{ marginBottom: 48 }}>
          {[
            {
              type: 'Digitalni alat',
              quote: '"FoodCost Analiza reši problem koji smo godinama ignorisali."',
              body: 'Konačno vidimo gde odlazi novac u kuhinji. Alat koji zaista razume ugostiteljstvo. — Korisnik platforme',
            },
            {
              type: 'Web projekat',
              quote: '"Sajt je lak za ažuriranje i izgleda tačno kako smo hteli."',
              body: 'Blog radi, mušterije nas nalaze — to je sve što nam treba. — Tehnički Pregled XL',
            },
          ].map((r, i) => (
            <motion.div
              key={r.type}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginBottom: 12,
                }}
              >
                {r.type}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 14,
                  color: 'var(--ink)',
                  marginBottom: 10,
                  lineHeight: 1.5,
                }}
              >
                {r.quote}
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--ink-2)' }}>{r.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            borderTop: '1px solid var(--paper-3)',
            paddingTop: 32,
          }}
        >
          {[
            ['100%', 'Isporuka na vreme'],
            ['6', 'Realizovana projekta'],
            ['70%', 'Repeat klijenti'],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
