# Portfolio Miloš Stamenković — srpska verzija

Pozicioniranje: **Social Media Manager & Content Strateg**, prijava za posao u
marketing / social media timu — ne freelancer koji prodaje usluge. Copy mora da
čita kao „šta donosim timu", nikad kao cenovnik. Nigde na sajtu nema rokova
isporuke, rundi revizija, retainera ni „slobodan za N projekata mesečno".

**Svaka brojka na sajtu mora da bude proverljiva.** Jedini dopušteni podaci dolaze
sa Instagram Insights screenshot-a koji je commitovan u `public/case-76k.png`:
76.705 pregleda, 98,7% dosega van pratilaca, 660 novih pratilaca, 344 čuvanja,
321 deljenje, 1.458 angažovanih profila. Ne dodavati procene, procente ni okrugle
brojke koje se ne mogu pokazati prstom na tom screenshot-u.

Ranije su na sajtu stajali `800+ DM poruka` i `17,86% engagement` — **oboje je
uklonjeno i ne vraća se.** 800 DM je bila procena (DM se ni ne meri u Insights-u),
a 17,86% matematički ne može da dođe sa te objave: 1.619 interakcija / 76.705
pregleda = 2,11%; za 17,86% bila bi potrebna baza od oko 9.000 pregleda.

Format brojeva: srpska verzija koristi `76.705` i `98,7%`. **Engleska koristi
`76,705` i `98.7%`** — separatori su obrnuti, ne prekopiravati između verzija.

## Copy koji se NE dira
Ovo su izričite odluke vlasnika sajta, ne predlozi:
- hero naslov: „Dizajn koji tera **prste** da stanu."
- sekcija „Ko sam": „Nisam dizajner koji je naučio socijalne mreže. **Bilo je obrnuto.**"
- Reels naslov i levak: „Jedna sekunda da zaradiš sledeću. **To je brief.**"

## Dizajn sistem
- Fontovi: Syne (700, 800) + Inter (400, 500) preko next/font/google.
  Syne je namerno zadržan — proveravano je Montserrat i Cinzel i oboje gube:
  Cinzel nema pravi lowercase i hero postaje verzalna pozivnica, Montserrat je
  najkorišćeniji Google font i ubija karakter. Ne menjati bez razloga.
- Ink: #0a0a0a | Ink-2: #444444 | Ink-3: #888888
- Paper: #f7f5f1 | Paper-2: #edeae4 | Paper-3: #e2dfd8
- Crveni akcent: #c0392b | Red-light: #f9ece9
- Bez gradijenata, bez senki
- Border-radius: 4px (kartice), 3px (levak), 2px (pilule/dugmad)
- Osnovna veličina fonta: 15px, line-height 1.8
- Naslovi featured kartica koriste `clamp(18px, 4.6vw, 26px)` — fiksnih 26px
  izlazi van ekrana na 375px kad je naslov jedan neprekidiv token
  (npr. `@milos.ugostitelj`, 344px u kutiji od 261px)
- Kartice u `.grid-2col` imaju `minWidth: 0`, a vrednosti u kontakt karticama
  `overflowWrap: 'anywhere'` — bez toga dugačak token
  (`linkversity.hr/blog/author/milos`) razvlači grid kolonu i sajt na 375px
  ima horizontalni skrol

## Stack
- Next.js 14, React 18, TypeScript, Tailwind CSS
- framer-motion za scroll animacije
- PDF export preko window.print() + print.css
- Deploy na Vercel

## Sekcije (po redu)
1. Cover — hero: naslov, pilule, 3 brojke, social linkovi
2. About — „Ko sam", mindset kartice, oblast fokusa
3. Services — „Šta donosim timu": 6 redova mapiranih na ono što pozicija traži
4. Reels — „Short-form video": levak + 2 brojke + pilule formata
5. Work — „Odabrani projekti": 3 featured tamne kartice, 3 standard 2-kolonske,
   pa podnaslov `Bonus: alati koje sam napravio za ugostiteljstvo` i još 2 featured
6. Canva — „Canva ekspertiza", samo 2x2 kartice (skill barovi sa procentima
   obrisani — nisu bili proverljivi)
7. AI — „AI Workflow", lista alata
8. Process — „Kako radim sa sadržajem": petlja od 5 koraka, bez rokova.
   Crveni slot pored naslova koraka nosi princip („jedan poziv, ne dva"),
   ne rok — komponenta je ista, promenjena je samo namena polja `time`
9. Reviews — „Šta kažu klijenti": 1 tamni citat + 1 kartica preko cele širine
   (stat red 100% / 6 / 70% obrisan)
10. Contact — „Kontakt": 5 kontakt kartica + tamni mailto CTA

Reels stoji pre Projekata namerno: prvo metod, pa dokazi.

## 8 projekata (po redu prikaza)
1. **76.705 pregleda case study** — https://www.instagram.com/milos.ugostitelj/
   (Instagram, featured, jedina kartica sa oznakom `FEATURED`; prikazuje
   `public/case-76k.png` preko `<img>` koji se sam sakrije na `onError`)
2. @milos.ugostitelj — https://www.instagram.com/milos.ugostitelj/ (Social Media, featured)
3. Linkversity.hr — SEO Blog Pisanje — https://linkversity.hr/blog/author/milos/ (SEO Blog, featured)
4. Glamorous Paws — https://glamorous-paws.com/ (WordPress)
5. Tehnički Pregled XL — https://tehnickipregled-xl.rs/ (WordPress)
6. AI Mediteranska Muzika — https://www.youtube.com/@milosstamenkovic888 (AI Content)
7. FoodCost Analiza — https://fodcost-analiza.vercel.app/ (Web App, bonus)
8. BizBreak v2.0 — https://bizbreak-ten.vercel.app/ (Web App, bonus)

Publika case studyja su **konobari**, ne vlasnici restorana — hook glasi
„Ako si konobar — ovo moraš da imaš.", a vrednost je Manifest konobara.

Napomena: domen FoodCost-a stvarno jeste `fodcost-analiza` (jedno `o`) —
potvrđeno tačno, nije slovna greška koju treba „popraviti".

## Nav
`Nav.tsx` koristi `IntersectionObserver` sa `threshold: 0` i
`rootMargin: '-45% 0px -45% 0px'`. Ne vraćati se na običan `threshold`:
sekcije više od oko 2,5 ekrana (Projekti) ga nikad ne dosegnu, pa aktivna
pilula ostane zaglavljena na prethodnoj sekciji.

## Kontakt
- Instagram: https://www.instagram.com/milos.ugostitelj/
- YouTube: https://www.youtube.com/@milosstamenkovic888
- Linkversity: https://linkversity.hr/blog/author/milos/
- Email: nokia2730i@gmail.com
- Telefon: +381 64 261 4867

## OG tagovi / link preview
`public/og.png` je 1200x630 kartica koja se vidi kad se link podeli na WhatsApp-u,
LinkedIn-u ili Viberu. Napravljena je renderovanjem HTML-a u dizajn sistemu sa
pravim Syne fontom (ne u Canvi) — ako treba promena, regenerisati istim putem,
ne rucno u editoru slika. Nosi tri proverljive brojke, pa vazi isto pravilo kao
za sajt: nista sto se ne moze pokazati na `case-76k.png`.

`layout.tsx` racuna apsolutni `siteUrl` preko `resolveSiteUrl()`:
`NEXT_PUBLIC_SITE_URL` > `VERCEL_PROJECT_PRODUCTION_URL` (Vercel je sam postavlja
u produkciji) > tvrdo upisan fallback. OG slika MORA da ima apsolutni URL, inace
je WhatsApp i LinkedIn ne dovuku. Kad se veze sopstveni domen, postaviti
`NEXT_PUBLIC_SITE_URL` u Vercel env, ne menjati kod.

## Engleski pandan
`portfolio-milos-en` je isti sajt na engleskom i drži se strukturno identičnim —
izmene prenositi u oba repoa. Pazi na format brojeva (vidi gore).
