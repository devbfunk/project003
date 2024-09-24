import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Playfair_Display, Inter } from 'next/font/google';
import Intro from "@/components/Intro";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "RunCMDCreate",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={cn(`antialiased font-sans flex-col flex min-h-screen`, inter.variable, playfair.variable)}>
        <ThemeProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
