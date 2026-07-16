import { CompassNav } from "@/components/compass-nav";
import { CompassRose } from "@/components/compass-rose";
import { RevealInit } from "@/components/reveal-init";
import { WaypointPin, RouteConnector } from "@/components/waypoint-pin";
import { ScaleBar } from "@/components/scale-bar";
import { SoundingsField } from "@/components/soundings-field";
import { Postcard } from "@/components/postcard";

const IMG = {
  marinaAerial: "https://images.unsplash.com/photo-1715260867503-bcdd42768def",
  woodenDock: "https://images.unsplash.com/photo-1597334299414-f5efd4f32339",
  ropeCoil: "https://images.unsplash.com/photo-1649776044300-0bedee8b5300",
  shipBell: "https://images.unsplash.com/photo-1723883077281-85d8c2d4e5fc",
  nightHarbor: "https://images.unsplash.com/photo-1780856036788-6223dc07cda0",
  sunsetHarbor: "https://images.unsplash.com/photo-1769623709172-31c17784b16d",
  sailboats: "https://images.unsplash.com/photo-1767045570562-741bf80a9dc5",
  grilledFishOctopus: "https://images.unsplash.com/photo-1768322264423-4b0adf0cf31b",
  grilledFishBoard: "https://images.unsplash.com/photo-1624419845204-7a011c2c902c",
  shrimpPlate: "https://images.unsplash.com/photo-1574788032365-69e929e3ec68",
  pannaCotta: "https://images.unsplash.com/photo-1702728109878-c61a98d80491",
};

function img(url: string, w: number, q = 82) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const LOG_ENTRIES = [
  {
    num: "I",
    title: "Sate ala Dupin",
    tag: "Kućni specijalitet",
    desc: "Gostima najčešće spominjani jelovnički biser — Dupinova potpisna kombinacija mesa i plodova mora na vrućoj kamenoj ploči, po kojoj je restoran prepoznatljiv već godinama.",
    img: IMG.grilledFishOctopus,
    align: "left" as const,
  },
  {
    num: "II",
    title: "Škampi na buzaru i hobotnica",
    tag: "Iz mora",
    desc: "Svježi ulov dana kuhan na tradicionalan dalmatinski način — na buzaru, ispod peke ili jednostavno s gradela, uz umak od rajčice, bijelog vina i češnjaka.",
    img: IMG.shrimpPlate,
    align: "right" as const,
  },
  {
    num: "III",
    title: "Riba i meso s gradela",
    tag: "S roštilja",
    desc: "Losos, filet steak i rebarca redovito se spominju među favoritima gostiju — jednostavno pripremljeni, s naglaskom na kvalitetu namirnice.",
    img: IMG.grilledFishBoard,
    align: "left" as const,
  },
  {
    num: "IV",
    title: "Panna cotta",
    tag: "Za kraj plovidbe",
    desc: "Kremasti finale večere, uz mali izbor kolača — deserti koje recenzije dosljedno izdvajaju kao ugodno iznenađenje.",
    img: IMG.pannaCotta,
    align: "right" as const,
  },
];

const GALLERY = [
  { src: IMG.sailboats, alt: "Jedrilice u akvatoriju kod Biograda na Moru", caption: "Prilaz s mora" },
  { src: IMG.nightHarbor, alt: "Luka i šetalište u sumrak", caption: "Šetalište u sumrak" },
  { src: IMG.woodenDock, alt: "Drveni gat u marini", caption: "Gat, Marina Kornati" },
  { src: IMG.ropeCoil, alt: "Smotano brodsko uže na privezu", caption: "Privez br. 60" },
  { src: IMG.shipBell, alt: "Brodsko zvono", caption: "Znak za polazak" },
  { src: IMG.sunsetHarbor, alt: "Zalazak sunca nad lukom Biograda na Moru", caption: "Zalazak nad Biogradom" },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <CompassNav />

      <main className="relative overflow-x-clip">
        {/* ============ 00 — HERO CARTOUCHE ============ */}
        <section id="polazak" className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center">
          <SoundingsField preset="a" />
          <div
            className="chart-border reveal relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-12 sm:px-14 sm:py-16"
            style={{ background: "var(--card)" }}
          >
            <p className="text-label" style={{ color: "var(--route)" }}>
              Pomorska karta obale · Zaljev Biogradski
            </p>
            <CompassRose className="h-24 w-24 text-[color:var(--compass)] sm:h-32 sm:w-32" spin />
            <h1 className="font-display text-5xl leading-[0.98] sm:text-7xl md:text-8xl">
              Dupin
            </h1>
            <p className="font-chart-mono text-xs tracking-widest" style={{ color: "var(--muted-foreground)" }}>
              43°56&apos;N&nbsp;&nbsp;15°26&apos;E · BIOGRAD NA MORU
            </p>
            <p className="max-w-md font-serif text-lg italic" style={{ color: "var(--foreground)" }}>
              Konoba i restoran uz samu obalu — obilježena luka na karti svakog
              gosta koji dolazi morem, s promenade ili iz grada.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+385954574141"
                className="rounded-full px-7 py-3 text-sm uppercase tracking-[0.14em] transition-colors"
                style={{ background: "var(--button-primary-bg)", color: "var(--button-primary-fg)" }}
              >
                Zaplovi — nazovi
              </a>
              <a
                href="#luka"
                className="rounded-full border px-7 py-3 text-sm uppercase tracking-[0.14em] transition-colors hover:border-[color:var(--route)] hover:text-[color:var(--route)]"
                style={{ borderColor: "var(--button-ghost-border)" }}
              >
                Odredi kurs do Dupina
              </a>
            </div>
          </div>
          <p className="reveal relative z-10 mt-10 font-chart-mono text-[0.65rem]" style={{ color: "var(--muted-foreground)" }}>
            ★ TripAdvisor 4,5 / 5 — 414+ recenzija · #3 od 95 restorana u Biogradu na Moru
          </p>
        </section>

        <RouteConnector className="h-16 sm:h-24" />

        {/* ============ 01 — PRIČA / ABOUT ============ */}
        <section id="prica" className="relative px-6 py-16 sm:py-24">
          <SoundingsField preset="b" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center gap-3 sm:w-16">
              <WaypointPin num="01" />
            </div>
            <div className="reveal flex-1">
              <p className="text-label" style={{ color: "var(--route)" }}>Waypoint 01 — Polazna točka</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Priča o Dupinu</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 font-serif text-[1.05rem] leading-relaxed" style={{ color: "var(--foreground)" }}>
                  <p>
                    Dupin stoji na Šetalištu kneza Branimira, korak od Marine
                    Kornati — jedne od najvećih na Jadranu i polazišta za
                    plovidbu prema Kornatskim otocima. Ime nosi po dupinu,
                    najčešćem pratitelju brodova ovog dijela obale, i to
                    obećanje drži: restoran s pogledom i mirisom mora.
                  </p>
                  <p>
                    Gosti u recenzijama dosljedno ističu toplu i lijepo
                    uređenu unutrašnjost, ugodnu, intimnu atmosferu terase te
                    ljubazno i nasmiješeno osoblje — kombinaciju koja Dupin
                    već godinama drži među najbolje ocijenjenim restoranima u
                    Biogradu na Moru.
                  </p>
                  <p>
                    Kuhinja je sredozemna, s naglaskom na plodove mora, uz
                    mogućnost odabira i vegetarijanskih jela. Restoran radi
                    sezonski — izvan ljetnih mjeseci preporučamo prethodni
                    poziv radi provjere radnog vremena.
                  </p>
                </div>
                <Postcard
                  src={img(IMG.marinaAerial, 700)}
                  alt="Marina Kornati iz zraka, Biograd na Moru"
                  caption="Marina Kornati, do broda #dupin"
                  rotate={-2}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <RouteConnector className="h-16 sm:h-24" />

        {/* ============ 02 — ULOV DANA / MENU AS SHIP'S LOG ============ */}
        <section id="ulov" className="relative px-6 py-16 sm:py-24" style={{ background: "var(--card)" }}>
          <SoundingsField preset="c" />
          <div className="relative mx-auto max-w-5xl">
            <div className="flex items-start gap-4">
              <WaypointPin num="02" />
              <div>
                <p className="text-label" style={{ color: "var(--route)" }}>Waypoint 02 — Brodski dnevnik</p>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl">Ulov dana</h2>
                <p className="mt-3 max-w-xl font-serif italic" style={{ color: "var(--muted-foreground)" }}>
                  Umjesto uobičajenog jelovnika, četiri zapisa iz brodskog
                  dnevnika kuhinje — jela koja gosti u recenzijama spominju
                  najčešće i s najviše topline.
                </p>
              </div>
            </div>

            <div className="relative mt-14 space-y-14">
              <div className="route-line absolute left-1/2 top-0 hidden h-full -translate-x-1/2 sm:block" />
              {LOG_ENTRIES.map((entry) => (
                <div
                  key={entry.num}
                  className={`reveal relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    entry.align === "right" ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="sm:w-1/2">
                    <Postcard
                      src={img(entry.img, 800)}
                      alt={entry.title}
                      caption={entry.title}
                      rotate={entry.align === "right" ? 2 : -1.5}
                      className="mx-auto max-w-xs sm:max-w-sm"
                    />
                  </div>
                  <div className="relative sm:w-1/2">
                    <span
                      className="absolute -left-2 top-0 hidden h-3 w-3 rounded-full sm:-left-[calc(50%+1.5rem)] sm:block"
                      style={{ background: "var(--route)" }}
                    />
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl" style={{ color: "var(--route)" }}>{entry.num}</span>
                      <span className="text-label" style={{ color: "var(--muted-foreground)" }}>{entry.tag}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{entry.title}</h3>
                    <p className="mt-3 font-serif leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {entry.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RouteConnector className="h-16 sm:h-24" />

        {/* ============ 03 — DUBINE / REVIEWS AS SOUNDINGS ============ */}
        <section id="dubine" className="relative px-6 py-16 sm:py-24">
          <SoundingsField preset="a" />
          <div className="relative mx-auto max-w-4xl">
            <div className="flex items-start gap-4">
              <WaypointPin num="03" />
              <div>
                <p className="text-label" style={{ color: "var(--route)" }}>Waypoint 03 — Mjerenje dubine</p>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl">Dubine</h2>
                <p className="mt-3 max-w-xl font-serif italic" style={{ color: "var(--muted-foreground)" }}>
                  Kao što pomorske karte bilježe dubinu mora brojkama, ovdje
                  bilježimo ono što gosti stvarno kažu — u brojkama i riječima.
                </p>
              </div>
            </div>

            <div className="reveal mt-12 grid gap-8 sm:grid-cols-3">
              <div className="paper-card p-6 text-center">
                <div className="font-display text-5xl" style={{ color: "var(--route)" }}>4,5</div>
                <p className="text-label mt-2" style={{ color: "var(--muted-foreground)" }}>TripAdvisor / 5</p>
              </div>
              <div className="paper-card p-6 text-center">
                <div className="font-display text-5xl" style={{ color: "var(--route)" }}>414+</div>
                <p className="text-label mt-2" style={{ color: "var(--muted-foreground)" }}>recenzija gostiju</p>
              </div>
              <div className="paper-card p-6 text-center">
                <div className="font-display text-5xl" style={{ color: "var(--route)" }}>#3</div>
                <p className="text-label mt-2" style={{ color: "var(--muted-foreground)" }}>od 95 restorana u gradu</p>
              </div>
            </div>

            <div className="reveal mt-12 space-y-6 font-serif text-lg italic leading-relaxed" style={{ color: "var(--foreground)" }}>
              <p>
                &bdquo;Najbolji restoran u Biogradu&ldquo; i &bdquo;odličan riblji
                specijalitet&ldquo; ponavljaju se kao ocjene u velikom broju
                recenzija — uz stalne pohvale posluzi koja je opisana kao
                pažljiva i vedra.
              </p>
              <p>
                Gosti posebno izdvajaju &bdquo;Sate ala Dupin&ldquo; kao razlog
                povratka, dok se hobotnica, tuna i tjestenine s plodovima mora
                spominju kao dosljedno dobar odabir iz sezone u sezonu.
              </p>
            </div>
            <p className="mt-6 font-chart-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
              Izvor: TripAdvisor i Google recenzije, sažeto i parafrazirano.
            </p>
          </div>
        </section>

        <RouteConnector className="h-16 sm:h-24" />

        {/* ============ 04 — OBALA / GALLERY ============ */}
        <section id="obala" className="relative px-6 py-16 sm:py-24" style={{ background: "var(--card)" }}>
          <SoundingsField preset="b" />
          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-start gap-4">
              <WaypointPin num="04" />
              <div>
                <p className="text-label" style={{ color: "var(--route)" }}>Waypoint 04 — Pogled s palube</p>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl">Slike s obale</h2>
              </div>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-10 sm:gap-x-10">
              {GALLERY.map((g, i) => (
                <Postcard
                  key={g.caption}
                  src={img(g.src, 700)}
                  alt={g.alt}
                  caption={g.caption}
                  rotate={i % 2 === 0 ? -2.5 : 2}
                  className="w-[46%] min-w-[150px] sm:w-56"
                />
              ))}
            </div>
          </div>
        </section>

        <RouteConnector className="h-16 sm:h-24" />

        {/* ============ 05 — LUKA / CONTACT & LOCATION ============ */}
        <section id="luka" className="relative px-6 py-16 sm:py-28">
          <SoundingsField preset="c" />
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-start gap-4">
              <WaypointPin num="05" />
              <div>
                <p className="text-label" style={{ color: "var(--route)" }}>Waypoint 05 — Konačno odredište</p>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl">Uplovi u luku</h2>
              </div>
            </div>

            <div className="reveal chart-border mt-12 grid gap-10 p-8 sm:grid-cols-[1fr_auto] sm:p-12" style={{ background: "var(--card)" }}>
              <div className="space-y-5">
                <div>
                  <p className="text-label" style={{ color: "var(--muted-foreground)" }}>Pristanište</p>
                  <p className="font-display text-2xl">Šetalište kneza Branimira 60</p>
                  <p className="font-serif" style={{ color: "var(--muted-foreground)" }}>
                    23210 Biograd na Moru, uz Marinu Kornati
                  </p>
                </div>
                <div>
                  <p className="text-label" style={{ color: "var(--muted-foreground)" }}>Radno vrijeme</p>
                  <p className="font-serif">Utorak – nedjelja, 15:00 – 24:00</p>
                  <p className="font-serif" style={{ color: "var(--muted-foreground)" }}>
                    Ponedjeljkom zatvoreno · sezonski rad, provjerite izvan sezone
                  </p>
                </div>
                <div>
                  <p className="text-label" style={{ color: "var(--muted-foreground)" }}>Veza s brodom (telefon)</p>
                  <a href="tel:+385954574141" className="font-display text-2xl hover:text-[color:var(--route)]">
                    095 457 4141
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:+385954574141"
                    className="rounded-full px-6 py-3 text-sm uppercase tracking-[0.12em]"
                    style={{ background: "var(--button-primary-bg)", color: "var(--button-primary-fg)" }}
                  >
                    Rezerviraj stol
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Restoran+Dupin+%C5%A0etali%C5%A1te+kneza+Branimira+60+Biograd+na+Moru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border px-6 py-3 text-sm uppercase tracking-[0.12em] hover:border-[color:var(--route)] hover:text-[color:var(--route)]"
                    style={{ borderColor: "var(--button-ghost-border)" }}
                  >
                    Otvori u Google Maps
                  </a>
                </div>
                <a
                  href="https://www.facebook.com/pages/Restaurant-Bar-Dupin/199983453395566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-chart-mono text-xs underline decoration-dotted"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Restaurant Bar Dupin — Facebook
                </a>
              </div>

              <div className="flex flex-col items-center justify-between gap-8 border-t pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10" style={{ borderColor: "var(--border)" }}>
                <CompassRose className="h-28 w-28 text-[color:var(--compass)]" />
                <ScaleBar />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FOOTER / CHART LEGEND ============ */}
        <footer className="relative border-t px-6 py-12" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
          <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-label" style={{ color: "var(--route)" }}>Legenda karte</p>
              <ul className="mt-3 space-y-2 font-chart-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                <li>◈ — obilježena luka (Dupin)</li>
                <li>┈┈┈ — kurs plovidbe kroz stranicu</li>
                <li>brojke — dubina mora u fatomima (ukras)</li>
                <li>ruža vjetrova — sjever i orijentacija</li>
              </ul>
            </div>
            <div className="font-serif text-sm" style={{ color: "var(--muted-foreground)" }}>
              <p className="font-display text-xl" style={{ color: "var(--foreground)" }}>Dupin</p>
              <p>Šetalište kneza Branimira 60, Biograd na Moru</p>
              <p>095 457 4141</p>
              <p className="mt-4 text-xs italic">
                Karta nije namijenjena stvarnoj navigaciji — samo dobroj večeri.
              </p>
              <p className="mt-4 text-xs">© {new Date().getFullYear()} Dupin, Biograd na Moru.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
