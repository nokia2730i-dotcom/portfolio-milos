'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '1',
    title: 'Cilj i publika',
    time: 'pre svake ideje',
    body: 'Šta objava treba da postigne i kome se obraća. Doseg, DM-ovi, poseta profilu, prodaja — svaki cilj traži drugi format. Bez ovoga se snima naslepo.',
  },
  {
    num: '2',
    title: 'Hook i ugao',
    time: 'prva sekunda',
    body: 'Koji problem publika odmah prepoznaje i kojim rečima ga pogađam. Više verzija hook-a za istu ideju, pa se bira ona sa najkonkretnijim obećanjem.',
  },
  {
    num: '3',
    title: 'Produkcija u serijama',
    time: 'batch, ne jedan po jedan',
    body: 'Isti setup, više objava. Titlovi, pacing i zvuk po istom sistemu — zato profil ostaje konzistentan i kad tempo poraste.',
  },
  {
    num: '4',
    title: 'Objava i CTA',
    time: 'jedan poziv, ne dva',
    body: 'Caption, hashtag set, vreme objave i jedan jasan sledeći korak. Dva poziva na akciju u istoj objavi dele pažnju i oba gube.',
  },
  {
    num: '5',
    title: 'Čitanje brojeva',
    time: 'ulaz u sledeći krug',
    body: 'Šta je zadržalo gledanje, šta je donelo sačuvane objave i DM-ove. Izvlačim pravilo, upisujem ga u plan — i krug počinje ponovo.',
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
          <p className="eyebrow">Kako radim sa sadržajem</p>
          <h2 className="section-title">
            Sadržaj nije inspiracija.{' '}
            <span style={{ color: 'var(--red)' }}>To je krug koji se ponavlja.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Isti put za svaki brend — od cilja do sledeće objave. Zato ne zavisi od toga da li
            je danas bio dobar dan za ideje.
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
                    fontFamily: 'var(--font-display), Cinzel, serif',
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
                      fontFamily: 'var(--font-display), Cinzel, serif',
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
                        fontFamily: 'var(--font-display), Cinzel, serif',
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
