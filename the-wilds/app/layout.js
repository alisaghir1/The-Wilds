import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMobile from "./components/NavMobile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedButtons from "./components/FixedButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Wilds by Aldar | Luxury Living Managed by Hi5 Properties",
  description:
    "Experience luxury living at The Wilds, an exclusive project by Aldar, managed by Hi5 Properties. Explore premium residences designed for comfort, elegance, and modern lifestyles. Whether you're looking to buy, rent, or invest, we ensure a seamless real estate experience.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "The Wilds by Aldar | Luxury Living Managed by Hi5 Properties",
    description:
      "Discover The Wilds, a premium Aldar project managed by Hi5 Properties. Luxury homes tailored to modern lifestyles.",
    url: "https://yourwebsite.com/the-wilds",
    type: "website",
    images: [
      {
        url: "/hero.jpg", // Add an actual image for better previews
        width: 1200,
        height: 630,
        alt: "The Wilds by Aldar - Luxury Living",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NavMobile />
        {children}
        <FixedButtons />
        <Footer />
      </body>
    </html>
  );
}
