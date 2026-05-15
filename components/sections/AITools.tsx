'use client'
import { motion } from 'framer-motion'

const tools = [
  {
    dot: 'C',
    dotBg: '#c0392b',
    title: 'Claude / ChatGPT — Strategija & Copy',
    body: 'Content kalendari, pisanje hookova, razvoj aplikacija. AI generiše opcije, ja finalizujem.',
  },
  {
    dot: 'MJ',
    dotBg: '#0a0a0a',
    title: 'Midjourney — Vizuelni Koncepti',
    body: 'Mood ploče, thumbnail vizuali, generisanje pozadina. Prompt inženjering kao veština.',
  },
  {
    dot: 'S',
    dotBg: '#c0392b',
    title: 'Suno AI — Originalna Muzika',
    body: 'Custom pozadinska muzika za Reels i YouTube. Bez autorskih prava. Vidi: youtube.com/@milosstamenkovic888',
  },
  {
    dot: '+',
    dotBg: '#0a0a0a',
    title: 'ElevenLabs · CapCut AI · Canva Magic',
    body: 'AI glasovni zapis, auto-titlovi, uklanjanje pozadine. Kompletan pipeline od ideje do isporuke.',
  },
]

export default function AITools() {
  return (
    <section id="ai" style={{ background: 'var(--paper)', padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">AI Workflow</p>
          <h2 className="section-title">
            AI ne zamenjuje kreativce.{' '}
            <span style={{ color: 'var(--red)' }}>Otkriva ko su pravi.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580 }}>
            Koristim AI da idem brže i razmišljam šire. Kreativna odluka je uvek moja —
            AI izvršava, ja odlučujem.
          </p>
        </motion.div>

        <div>
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: 'flex',
                gap: 20,
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-3)',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: t.dotBg,
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
                    fontSize: 11,
                    color: '#fff',
                  }}
                >
                  {t.dot}
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: 'var(--ink)',
                    marginBottom: 6,
                  }}
                >
                  {t.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink-2)' }}>{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
