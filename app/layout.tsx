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
    "Restoran Dupin u Biogradu na Moru, uz šetalište kneza Branimira i marinu Kornati. Sredozemna kuhinja, svježe iz mora — tuna, hobotnica, škampi na buzaru. TripAdvisor 4.5/5, 414+ recenzija.",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
