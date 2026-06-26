import "./globals.css";

export const metadata = {
  title: { default: "Roots & Bowls — Eat Clean. Feel Alive. | Indiranagar, Bengaluru", template: "%s | Roots & Bowls" },
  description: "Bengaluru's freshest plant-forward cafe. Salad bowls, grain bowls, cold-press juices, vegan & gluten-free options. Dine-in, delivery & meal prep subscription in Indiranagar.",
  keywords: ["healthy restaurant Bengaluru", "salad bowl cafe Indiranagar", "vegan cafe Bangalore", "meal prep delivery Bengaluru", "clean eating cafe Bangalore"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rootsandbowls.in",
    siteName: "Roots & Bowls",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}