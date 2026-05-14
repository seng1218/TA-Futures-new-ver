import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
 title: "TA Futures | Next-Generation Trading Infrastructure",
 description: "Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Licensed by Securities Commission Malaysia.",
 openGraph: {
 title: "TA Futures | Next-Generation Trading Infrastructure",
 description: "Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Licensed by Securities Commission Malaysia.",
 url: "https://www.tafutures.com.my",
 siteName: "TA Futures",
 locale: "en_MY",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "TA Futures | Next-Generation Trading Infrastructure",
 description: "Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Licensed by Securities Commission Malaysia.",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body className="antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
 <ThemeProvider>
 <Header />

 <PageTransition>
 <main className="flex-grow">
 {children}
 </main>
 <Footer />
 </PageTransition>
 </ThemeProvider>
 </body>
 </html>
 );
}
