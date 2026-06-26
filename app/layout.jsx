import "./globals.css";
import { Metamorphous,Almendra_SC,  Inter,JetBrains_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Zest & Ember | Fusion Restaurant Bandra, Mumbai",
    template: "%s | Zest & Ember",
  },
  description:
    "Mumbai's boldest fusion dining experience. Flame-grilled meats, Asian-Western cuisine, craft cocktails, and unforgettable ambiance in the heart of Bandra West.",
  keywords: [
    "fusion restaurant Mumbai",
    "best restaurant Bandra",
    "flame grilled food Mumbai",
    "craft cocktail bar Mumbai",
    "fine dining Mumbai",
    "Asian Western fusion Bandra",
    "date night restaurant Mumbai",
    "private dining Mumbai",
    "Sunday brunch Bandra",
  ],
  openGraph: {
    title: "Zest & Ember | Where Every Bite Has a Story",
    description: "Mumbai's boldest fusion dining destination in Bandra West.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}