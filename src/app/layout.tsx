import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lefty Reset — 60-Day Transformation Challenge",
  description: "A free, community-driven 60-day weight loss and fitness challenge for pickleball players and fitness enthusiasts. Join the Lefty Reset and compete for $1,000+ in prizes.",
  openGraph: {
    title: "Lefty Reset — 60-Day Transformation Challenge",
    description: "A free, community-driven 60-day weight loss and fitness challenge for pickleball players and fitness enthusiasts. Join the Lefty Reset and compete for $1,000+ in prizes.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
