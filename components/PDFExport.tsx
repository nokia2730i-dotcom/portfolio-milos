'use client'
import { Document, Page, Text, View, StyleSheet, pdf, Font } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'

Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
})

const S = StyleSheet.create({
  page:   { backgroundColor: '#f7f5f1', padding: 48, fontFamily: 'Inter' },
  eye:    { fontSize: 8, color: '#c0392b', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 },
  h1:     { fontSize: 30, fontWeight: 'bold', color: '#0a0a0a', lineHeight: 1.15, marginBottom: 14 },
  body:   { fontSize: 11, color: '#444444', lineHeight: 1.75, marginBottom: 20 },
  div:    { height: 1, backgroundColor: '#e2dfd8', marginVertical: 20 },
  row3:   { flexDirection: 'row', gap: 12, marginBottom: 20 },
  sbox:   { flex: 1, backgroundColor: '#edeae4', padding: 14, borderRadius: 4 },
  snum:   { fontSize: 26, fontWeight: 'bold', color: '#0a0a0a' },
  slbl:   { fontSize: 8, color: '#888888', textTransform: 'uppercase', letterSpacing: 1 },
  card:   { backgroundColor: '#edeae4', padding: 16, borderRadius: 4, marginBottom: 10 },
  dark:   { backgroundColor: '#0a0a0a', padding: 22, borderRadius: 4, marginBottom: 14 },
  clbl:   { fontSize: 8, color: '#888888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 },
  ctitle: { fontSize: 12, fontWeight: 'bold', color: '#0a0a0a', marginBottom: 5 },
  cbody:  { fontSize: 10, color: '#444444', lineHeight: 1.65 },
  badge:  { fontSize: 7, fontWeight: 'bold', color: '#c0392b', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 },
  srow:   { flexDirection: 'row', gap: 16, paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: '#e2dfd8' },
  psrow:  { flexDirection: 'row', gap: 14, marginBottom: 14 },
  psdot:  { width: 26, height: 26, backgroundColor: '#c0392b', borderRadius: 2, alignItems: 'center', justifyContent: 'center' },
  pstxt:  { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  meta:   { fontSize: 8, color: '#c0392b', textTransform: 'uppercase', letterSpacing: 1, marginTop: 5 },
})

export const PortfolioPDF = () => (
  <Document title="Miloš Stamenković — Portfolio 2025">

    {/* 01 COVER */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Social Media Designer & Digital Product Builder</Text>
      <Text style={S.h1}>Dizajn koji tera{'\n'}prste da stanu.</Text>
      <Text style={S.body}>Kreiram sadržaj koji radi posao i alate koji rešavaju probleme — short-form video, Canva sistemi, Reels, WordPress sajtovi i web aplikacije na Vercelu.</Text>
      <View style={S.div} />
      <View style={S.row3}>
        <View style={S.sbox}><Text style={S.snum}>5+</Text><Text style={S.slbl}>Godina iskustva</Text></View>
        <View style={S.sbox}><Text style={S.snum}>6</Text><Text style={S.slbl}>Realizovana projekta</Text></View>
        <View style={S.sbox}><Text style={S.snum}>3M+</Text><Text style={S.slbl}>Organski reach</Text></View>
      </View>
      <View style={S.div} />
      <Text style={{ fontSize: 9, color: '#888888' }}>instagram.com/konobarignite  ·  youtube.com/@milosstamenkovic888</Text>
    </Page>

    {/* 02 O MENI */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Ko sam · 02</Text>
      <Text style={S.h1}>Nisam dizajner koji je{'\n'}naučio socijalne mreže.{'\n'}Bilo je obrnuto.</Text>
      <Text style={S.body}>Godine u ugostiteljstvu naučile su me jednu istinu: ljudi ti daju jednu sekundu. Preneo sam to u content i digitalne proizvode — svaki kadar, svaki ekran mora da zasluži da ostane.</Text>
      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
        <View style={[S.dark, { flex: 1, marginBottom: 0 }]}>
          <Text style={[S.clbl, { color: 'rgba(255,255,255,0.4)' }]}>Mentalitet</Text>
          <Text style={[S.ctitle, { color: '#fff', marginBottom: 6 }]}>Estetika sa namerom</Text>
          <Text style={[S.cbody, { color: 'rgba(255,255,255,0.65)' }]}>Hook prvo. Priča drugo. CTA treće. Uvek tim redom.</Text>
        </View>
        <View style={[S.dark, { flex: 1, marginBottom: 0 }]}>
          <Text style={[S.clbl, { color: 'rgba(255,255,255,0.4)' }]}>Pristup</Text>
          <Text style={[S.ctitle, { color: '#fff', marginBottom: 6 }]}>AI-asistovano, ljudski vođeno</Text>
          <Text style={[S.cbody, { color: 'rgba(255,255,255,0.65)' }]}>Alati nemaju ukus. Ja imam.</Text>
        </View>
      </View>
      <View style={S.card}>
        <Text style={S.clbl}>Oblast fokusa</Text>
        <Text style={S.ctitle}>Ugostiteljstvo, lokalni biznis, digitalni alati</Text>
        <Text style={S.cbody}>Razumem poslovni kontekst iza sadržaja i softvera — jer sam u industriji radio. To se ne uči na kursu dizajna.</Text>
      </View>
    </Page>

    {/* 03 USLUGE */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Usluge · 03</Text>
      <Text style={S.h1}>Šest stvari koje radim{'\n'}izuzetno dobro.</Text>
      {[
        ['01', 'Short-form Video Produkcija', 'Reels, TikTok, Shorts — od koncepta do isporuke. Hook dizajn, pacing, zvuk, titlovi.', '3–10 videa/nedeljno · 48h isporuka'],
        ['02', 'Canva Brand Sistem', 'Kompletan brand kit + 20–50 custom templeta. Jednom napravljeno, koristiš zauvek.', 'Brand kit · Templeti · Stil vodič'],
        ['03', 'AI Content Strategija', 'Mesečni content plan uz AI — hookovi, koncepti, caption, analiza konkurencije.', '30-dnevni plan · Hook banka · Copy'],
        ['04', 'Instagram Vizuelni Refresh', 'Grid, Highlights, Stories sistem, bio. Jedna nedelja — 10x bolji profil.', 'Audit · Grid sistem · Stories kit'],
        ['05', 'WordPress Sajtovi', 'Profesionalni sajtovi za lokalni biznis — od nule do live. SEO, blog, mobile-first.', 'WordPress · SEO · Blog · Canva'],
        ['06', 'Web Aplikacije', 'Poslovni web alati na Vercelu — kalkulatori, analitički sistemi, SaaS micro-produkti.', 'Next.js · Vercel · React'],
      ].map(([num, title, body, meta]) => (
        <View key={num} style={S.srow}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e2dfd8', width: 32 }}>{num}</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0a0a0a', marginBottom: 4 }}>{title}</Text>
            <Text style={{ fontSize: 10, color: '#444444', lineHeight: 1.65 }}>{body}</Text>
            <Text style={S.meta}>{meta}</Text>
          </View>
        </View>
      ))}
    </Page>

    {/* 04a PROJEKTI — WEB APLIKACIJE */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Projekti · 04</Text>
      <Text style={S.h1}>Rad koji pomera metrike —{'\n'}ne samo Instagram lajkove.</Text>

      <View style={[S.dark, { marginBottom: 16 }]}>
        <Text style={S.badge}>WEB APP · FEATURED</Text>
        <Text style={[S.ctitle, { color: '#fff', fontSize: 15, marginBottom: 8 }]}>FoodCost Analiza</Text>
        <Text style={[S.cbody, { color: 'rgba(255,255,255,0.75)', marginBottom: 10 }]}>
          Platforma za analizu poslovanja restorana — food cost, recepture, nedeljni unosi i godišnji trendovi. Dashboard u realnom vremenu, Kalkulator recepture sa food cost-om po porciji, Menu Engineering, Godišnji trend vizualizacija. Besplatno podešavanje za 5 minuta.
        </Text>
        <Text style={[S.meta, { color: 'rgba(255,255,255,0.4)' }]}>fodcost-analiza.vercel.app · Next.js · Auth sistem · Besplatno uvek</Text>
      </View>

      <View style={[S.dark, { marginBottom: 0 }]}>
        <Text style={S.badge}>WEB APP · FEATURED</Text>
        <Text style={[S.ctitle, { color: '#fff', fontSize: 15, marginBottom: 8 }]}>BizBreak v2.0</Text>
        <Text style={[S.cbody, { color: 'rgba(255,255,255,0.75)', marginBottom: 10 }]}>
          Kalkulator tačke rentabilnosti sa punom PDV analizom, scenarijima i PDF exportom. 4 valute (RSD/EUR/USD/BAM), 3 jezika (SR/EN/HR). Jedini ovakav alat specijalizovan za srpsko tržište.
        </Text>
        <Text style={[S.meta, { color: 'rgba(255,255,255,0.4)' }]}>bizbreak-ten.vercel.app · Vercel · PDF Export · 4 valute · Multilingual</Text>
      </View>
    </Page>

    {/* 04b PROJEKTI — SAJTOVI + CONTENT */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Projekti (nastavak) · 04</Text>
      {[
        ['WORDPRESS', 'Glamorous Paws', 'Salon za negu pasa — kompletan WordPress sajt, 3 SEO blog posta, 2 lokacije. Klijent ga sam ažurira.', 'glamorous-paws.com'],
        ['WORDPRESS', 'Tehnički Pregled XL', 'Servis za registraciju vozila — WordPress, kalkulator registracije, FAQ, mobile-first dizajn.', 'tehnickipregled-xl.rs'],
        ['AI CONTENT', 'YouTube AI Muzika', 'Originalni kanal sa Suno AI mediteranskom muzikom. Greek pop niche, Shorts format.', 'youtube.com/@milosstamenkovic888'],
        ['SOCIAL MEDIA', '@konobarignite', 'Lični brend na raskrsnici ugostiteljstva i digitalnog marketinga. Reels, niche content.', 'instagram.com/konobarignite'],
      ].map(([type, title, body, url]) => (
        <View key={title} style={[S.card, { marginBottom: 14 }]}>
          <Text style={S.badge}>{type}</Text>
          <Text style={S.ctitle}>{title}</Text>
          <Text style={S.cbody}>{body}</Text>
          <Text style={[S.meta, { marginTop: 6 }]}>{url}</Text>
        </View>
      ))}
    </Page>

    {/* 05 CANVA */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Canva ekspertiza · 05</Text>
      <Text style={S.h1}>Canva nije alat.{'\n'}U pravim rukama —{'\n'}sistem.</Text>
      <Text style={S.body}>Izgraditi brand sistem koji radi na 50 templeta, ostaje konzistentan i stvarno štedi vreme — to je drugačija veština.</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {[
          ['Brand Kit', 'Jednom napravljeno, zauvek korisno'],
          ['Sistem Templeta', '20–50 custom templeta'],
          ['Canva AI', 'Magic Studio workflow'],
          ['Video u Canvi', 'Reels bez Premiere-a'],
        ].map(([t, b]) => (
          <View key={t} style={[S.card, { width: '47%', marginBottom: 0 }]}>
            <Text style={S.ctitle}>{t}</Text>
            <Text style={S.cbody}>{b}</Text>
          </View>
        ))}
      </View>
      <View style={S.div} />
      {[
        ['Vizuelni dizajn i layout', '95%'],
        ['Arhitektura brand sistema', '90%'],
        ['Video i animacija', '80%'],
        ['Canva AI funkcije', '88%'],
      ].map(([label, pct]) => (
        <View key={label} style={{ marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
            <Text style={{ fontSize: 11, color: '#0a0a0a' }}>{label}</Text>
            <Text style={{ fontSize: 11, color: '#888888' }}>{pct}</Text>
          </View>
          <View style={{ height: 3, backgroundColor: '#e2dfd8', borderRadius: 2 }}>
            <View style={{ height: 3, backgroundColor: '#0a0a0a', borderRadius: 2, width: pct }} />
          </View>
        </View>
      ))}
    </Page>

    {/* 06 REELS */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Short-form video · 06</Text>
      <Text style={S.h1}>Jedna sekunda da{'\n'}zaradiš sledeću.{'\n'}To je brief.</Text>
      <Text style={S.body}>Ne pravim "sadržaj". Inženjering sam sekvenci pažnje. Hook, izgradnja, isplata — svaki Reel je mikro-priča sa poslom koji treba da uradi.</Text>
      {[
        ['0–2 sek — Prekid obrasca', 'Zaustavi skrolovanje', '#1a1a1a'],
        ['2–8 sek — Izgradnja tenzije', 'Stvori razlog da ostane', '#2d2d2d'],
        ['8–25 sek — Isporuči obećanje', 'Zasluži gledanje', '#c0392b'],
        ['Outro — Loop ili CTA', 'Watch time ili akcija', '#edeae4'],
      ].map(([label, sub, bg]) => (
        <View key={label} style={{ backgroundColor: bg, padding: 12, marginBottom: 3, borderRadius: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: bg === '#edeae4' ? '#0a0a0a' : '#fff' }}>{label}</Text>
          <Text style={{ fontSize: 10, color: bg === '#edeae4' ? '#888888' : 'rgba(255,255,255,0.6)' }}>{sub}</Text>
        </View>
      ))}
      <View style={[S.row3, { marginTop: 18 }]}>
        <View style={S.sbox}><Text style={S.snum}>3x</Text><Text style={S.slbl}>Iznad proseka watch time</Text></View>
        <View style={S.sbox}><Text style={S.snum}>15+</Text><Text style={S.slbl}>Reel formata</Text></View>
        <View style={S.sbox}><Text style={S.snum}>48h</Text><Text style={S.slbl}>Prosečna isporuka</Text></View>
      </View>
    </Page>

    {/* 07 AI ALATI */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>AI Workflow · 07</Text>
      <Text style={S.h1}>AI ne zamenjuje kreativce.{'\n'}Otkriva ko su pravi.</Text>
      <Text style={S.body}>Kreativna odluka je uvek moja — AI izvršava, ja odlučujem.</Text>
      {[
        ['C', 'Claude / ChatGPT — Strategija & Copy', 'Content kalendari, pisanje hookova, razvoj aplikacija. AI generiše opcije, ja finalizujem.', '#c0392b'],
        ['MJ', 'Midjourney — Vizuelni Koncepti', 'Mood ploče, thumbnail vizuali, generisanje pozadina. Prompt inženjering kao veština.', '#0a0a0a'],
        ['S', 'Suno AI — Originalna Muzika', 'Custom pozadinska muzika za Reels i YouTube. Bez autorskih prava, bez naknada.', '#c0392b'],
        ['+', 'ElevenLabs · CapCut AI · Canva Magic', 'AI glasovni zapis, auto-titlovi, uklanjanje pozadine. Kompletan pipeline.', '#0a0a0a'],
      ].map(([dot, title, body, bg]) => (
        <View key={title} style={[S.psrow, { marginBottom: 18 }]}>
          <View style={[S.psdot, { backgroundColor: bg }]}><Text style={S.pstxt}>{dot}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={[S.ctitle, { marginBottom: 4 }]}>{title}</Text>
            <Text style={S.cbody}>{body}</Text>
          </View>
        </View>
      ))}
    </Page>

    {/* 08 PROCES */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Kako radim · 08</Text>
      <Text style={S.h1}>Bez iznenađenja.{'\n'}Bez ghost edita.{'\n'}Samo čista isporuka.</Text>
      {[
        ['1', 'Otkrivanje — 1 do 2 dana', 'Duboko uranjanje: ciljevi, publika, konkurencija, ton. Ne diramo produkciju pre usklađivanja.'],
        ['2', 'Strategija — 2 do 3 dana', 'Content plan ili arhitektura aplikacije. Odobreno pre nego što se takne piksel dizajna.'],
        ['3', 'Produkcija — 3 do 7 dana', 'Canva brand kit, video montaža, WordPress sajt ili web aplikacija. Batch produkcija za content.'],
        ['4', 'Pregled — 1 do 2 dana', '2 runde revizija uključene. Čvrsti rokovi sa obe strane.'],
        ['5', 'Isporuka + Optimizacija', 'Fajlovi, deploy, caption copy, hashtag strategija, raspored objava. Mesečni izveštaj na retaineru.'],
      ].map(([num, title, body]) => (
        <View key={num} style={S.psrow}>
          <View style={S.psdot}><Text style={S.pstxt}>{num}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={[S.ctitle, { marginBottom: 4 }]}>{title}</Text>
            <Text style={S.cbody}>{body}</Text>
          </View>
        </View>
      ))}
    </Page>

    {/* 09 REFERENCE */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Reference · 09</Text>
      <Text style={S.h1}>Rezultati su jedina{'\n'}prezentacija koja{'\n'}stvarno radi.</Text>
      <View style={[S.dark, { marginBottom: 14 }]}>
        <Text style={[S.cbody, { color: '#fff', fontSize: 13, fontStyle: 'italic', lineHeight: 1.6, marginBottom: 10 }]}>
          "Razumeo je naš brend pre nego što smo završili sa objašnjavanjem. Sajt izgleda profesionalno, klijenti nam ga hvale — i što je najvažnije, sami ga ažuriramo."
        </Text>
        <Text style={[S.clbl, { color: 'rgba(255,255,255,0.5)' }]}>Klijent — Glamorous Paws, Niš</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
        <View style={[S.card, { flex: 1 }]}>
          <Text style={S.ctitle}>"FoodCost Analiza reši problem koji smo godinama ignorisali."</Text>
          <Text style={S.cbody}>Konačno vidimo gde odlazi novac u kuhinji. — Korisnik platforme</Text>
        </View>
        <View style={[S.card, { flex: 1 }]}>
          <Text style={S.ctitle}>"Sajt je lak za ažuriranje i izgleda tačno kako smo hteli."</Text>
          <Text style={S.cbody}>Blog radi, mušterije nas nalaze. — Tehnički Pregled XL</Text>
        </View>
      </View>
      <View style={S.row3}>
        <View style={S.sbox}><Text style={S.snum}>100%</Text><Text style={S.slbl}>Isporuka na vreme</Text></View>
        <View style={S.sbox}><Text style={S.snum}>6</Text><Text style={S.slbl}>Realizovana projekta</Text></View>
        <View style={S.sbox}><Text style={S.snum}>70%</Text><Text style={S.slbl}>Repeat klijenti</Text></View>
      </View>
    </Page>

    {/* 10 KONTAKT */}
    <Page size="A4" style={S.page}>
      <Text style={S.eye}>Kontakt · 10</Text>
      <Text style={S.h1}>Tvoj brend zaslužuje{'\n'}da ga vide{'\n'}pravi ljudi.</Text>
      <Text style={S.body}>Slobodan za 2–3 nova projekta mesečno. Discovery call je besplatan, 30 minuta.</Text>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 14 }}>
        {[['Instagram', '@konobarignite'], ['YouTube', '@milosstamenkovic888'], ['Odziv', 'U roku od 24h']].map(([label, val]) => (
          <View key={label} style={[S.card, { flex: 1 }]}>
            <Text style={S.clbl}>{label}</Text>
            <Text style={[S.ctitle, { color: '#c0392b' }]}>{val}</Text>
          </View>
        ))}
      </View>
      <View style={S.card}>
        <Text style={S.ctitle}>Šta da pošalješ — jedan pasus. To je sve.</Text>
        <Text style={S.cbody}>Šta projekat treba da uradi, okvirni rok, budžet ako ga imaš. Ako ima fit — pravimo brief zajedno.</Text>
      </View>
      <View style={[S.dark, { marginTop: 10, alignItems: 'center' }]}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>Pošalji poruku →</Text>
        <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>instagram.com/konobarignite</Text>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 9, color: '#888888', marginTop: 28, fontStyle: 'italic' }}>
        Portfolio · Miloš Stamenković · Social Media Designer & Digital Product Builder · 2025
      </Text>
    </Page>

  </Document>
)

export async function downloadPDF() {
  const blob = await pdf(<PortfolioPDF />).toBlob()
  saveAs(blob, 'milos-stamenkovic-portfolio-2025.pdf')
}
