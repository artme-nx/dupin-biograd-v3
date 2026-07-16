import type { Metadata } from "next";
import { IM_Fell_English, Spectral, Special_Elite } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const chartHand = IM_Fell_English({
  variable: "--font-chart-hand",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const chartBody = Spectral({
  variable: "--font-chart-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const chartMono = Special_Elite({
  variable: "--font-chart-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dupin — Biograd na Moru | Konoba na moru, karta ukusa",
  description:
    "Restoran Dupin u Biogradu na Moru, na Šetalištu kneza Branimira 60. Plodovi mora i buzare, riba i meso s gradela, pasta i rižoti. Ocjena 4,5/5 na Googleu (490 recenzija). Svaki dan 15:00–23:30.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${chartHand.variable} ${chartBody.variable} ${chartMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Restoran Dupin",
              description:
                "Restoran uz obalu u Biogradu na Moru — plodovi mora i buzare, riba i meso s gradela, pasta i rižoti.",
              servesCuisine: ["Mediteranska", "Riba i plodovi mora", "Dalmatinska", "Roštilj"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Šetalište kneza Branimira 60",
                addressLocality: "Biograd na Moru",
                postalCode: "23210",
                addressRegion: "Zadarska županija",
                addressCountry: "HR",
              },
              telephone: "+385954574141",
              url: "https://artme-nx.github.io/dupin-biograd-v3/",
              priceRange: "€€",
              acceptsReservations: "True",
              openingHours: "Mo-Su 15:00-23:30",
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
