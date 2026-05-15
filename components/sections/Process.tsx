'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '1',
    title: 'Otkrivanje',
    time: '1 do 2 dana',
    body: 'Duboko uranjanje u brend ili projekat: ciljevi, publika, konkurencija, ton. Ne diramo produkciju pre usklađivanja.',
  },
  {
    num: '2',
    title: 'Strategija',
    time: '2 do 3 dana',
    body: 'Content plan ili arhitektura aplikacije. Odobreno pre nego što se takne piksel dizajna ili linije koda.',
  },
  {
    num: '3',
    title: 'Produkcija',
    time: '3 do 7 dana',
    body: 'Canva brand kit, video montaža, WordPress sajt ili web aplikacija. Batch produkcija za content.',
  },
  {
    num: '4',
    title: 'Pregled',
    time: '1 do 2 dana',
    body: '2 runde revizija uključene. Čvrsti rokovi sa obe strane — ovo nije beskonačna petlja.',
  },
  {
    num: '5',
    title: 'Isporuka + Optimizacija',
    time: '',
    body: 'Fajlovi, deploy, caption copy, hashtag strategija, raspored objava. Mesečni izveštaj na retaineru.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--paper-2)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Kako radim</p>
          <h2 className="section-title">
            Bez iznenađenja. Bez ghost edita.{' '}
            <span style={{ color: 'var(--red)' }}>Samo čista isporuka.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Svaki projekat prolazi iste 5 koraka. Jasan opseg, jasni rokovi, nula dvosmislenosti.
          </p>
        </motion.div>

        <div>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: 'flex',
                gap: 24,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              {/* Red numbered square */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: 'var(--red)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 14,
                    color: '#fff',
                  }}
                >
                  {s.num}
                </span>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 12,
                    flexWrap: 'wrap',
                    marginBottom: 6,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 16,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.title}
                  </h3>
                  {s.time && (
                    <span
                      style={{
                        fontSize: 11,
                        color: 'var(--red)',
                        fontFamily: 'var(--font-syne), Syne, sans-serif',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      — {s.time}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
