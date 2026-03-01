import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Santos | Portfólio",
  description: "Portfólio de Gabriel Santos, com projetos em React, TypeScript, Node.js e desenvolvimento web.",
  metadataBase: new URL("https://portfolio-gabriel-zeta.vercel.app"),
  openGraph: {
    title: "Gabriel Santos | Portfólio",
    description: "Portfólio de Gabriel Santos, com projetos em React, TypeScript, Node.js e desenvolvimento web.",
    url: "https://portfolio-gabriel-zeta.vercel.app",
    siteName: "Portfólio Gabriel Santos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

