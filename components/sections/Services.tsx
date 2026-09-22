'use client'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Instagram i TikTok strategija',
    body: 'Content plan koji polazi od cilja, ne od ideje. Ko je publika, koji problem odmah prepoznaje i koji format je zaustavlja. Ideja bez cilja je samo sadržaj.',
    meta: 'Content plan · Kalendar objava · Format po cilju',
  },
  {
    num: '02',
    title: 'Scroll-stopping ideje i hook-ovi',
    body: 'Hook nije naslov — to je obećanje koje prva sekunda mora da plati. Pišem više verzija za istu ideju i biram onu koja obećava najkonkretnije, pa je proveravam na publici.',
    meta: 'Hook banka · Prekid obrasca · Testiranje na publici',
  },
  {
    num: '03',
    title: 'Short-form produkcija',
    body: 'Reels, TikTok i Shorts od koncepta do gotovog videa — snimanje, montaža, pacing, zvuk, titlovi. Ideja ne čeka da se neko drugi oslobodi.',
    meta: 'Snimanje · Montaža · Titlovi · CapCut & Canva',
  },
  {
    num: '04',
    title: 'Analitika pretvorena u akciju',
    body: 'Doseg, engagement i sačuvane objave nisu izveštaj — to su instrukcije za sledeću objavu. Čitam šta je zadržalo gledanje, izvlačim pravilo i upisujem ga u plan.',
    meta: 'Insights · Šta ponoviti · Šta ukinuti',
  },
  {
    num: '05',
    title: 'Komunikacija sa klijentima',
    body: 'Dve decenije za stolom sa gostom znače da umem da razgovaram sa vlasnikom, primim kritiku bez odbrane i objasnim odluku bez žargona. Klijent koji razume zašto — odobrava brže.',
    meta: 'Brief · Prezentovanje ideje · Feedback bez drame',
  },
  {
    num: '06',
    title: 'Vizuelni sistemi i AI ubrzanje',
    body: 'Canva brand kit i templeti da ceo tim objavljuje konzistentno, bez dizajnera na svakom zadatku. AI za brzinu — Claude, Suno, ElevenLabs, CapCut. Kreativna odluka ostaje ljudska.',
    meta: 'Canva Pro · Brand kit · AI workflow',
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
          <p className="eyebrow">Šta donosim timu</p>
          <h2 className="section-title">
            Šest stvari koje tim dobija{' '}
            <span style={{ color: 'var(--red)' }}>prvog dana.</span>
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
