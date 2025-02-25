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
  title: "Dubai Luxury Properties | Buy, Rent, and Invest in Real Estate",
  description:
    "Discover your perfect home with Hi5 Properties, your trusted real estate partner. Explore a wide range of luxury properties, apartments, and homes designed to meet your lifestyle. Whether buying, renting, or selling, we make your real estate journey seamless and stress-free.",
  icons: {
    icon: "/logo.svg", // Replace with the path to your logo image in the public folder
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
