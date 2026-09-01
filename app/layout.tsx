import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biblebrain.ng"),
  title: {
    template: "%s | Bible Brain®",
    default: "Bible Brain® — A Scripture Learning Ecosystem",
  },
  description:
    "Bible Brain® is a faith-based educational and media ecosystem — television, education, family engagement, competitions, devotional resources, and Sunday school curricula — helping people of all ages study, understand, and live the Word of God.",
  keywords: [
    "Bible Brain",
    "Scripture learning ecosystem",
    "NNTVBC",
    "Nigeria",
    "Scripture",
    "teenagers",
    "faith",
    "Christian education",
    "Bible competition",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.biblebrain.ng",
    siteName: "Bible Brain®",
    title: "Bible Brain® — A Scripture Learning Ecosystem",
    description:
      "A faith-based educational and media ecosystem developing structured Bible learning experiences for people of all ages. The Bible is our Curriculum.®",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bible Brain® — A Scripture Learning Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Brain® — A Scripture Learning Ecosystem",
    description:
      "A faith-based educational and media ecosystem building structured Bible learning experiences.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/gallery/FB_IMG_1775728564798.jpg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
