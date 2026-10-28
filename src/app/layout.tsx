import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import GlobalLoader from "@/components/GlobalLoader";

export const metadata: Metadata = {
 metadataBase: new URL("https://tafutures.com.my"),
 title: "TA Futures | Next-Generation Trading Infrastructure",
 description: "Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Licensed by Securities Commission Malaysia.",
 openGraph: {
 title: "TA Futures | Next-Generation Trading Infrastructure",
 description: "Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Licensed by Securities Commission Malaysia.",
 url: "https://tafutures.com.my",
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
 <head>
 <Script id="meta-pixel" strategy="afterInteractive">
 {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '29055090117444003');
fbq('track', 'PageView');`}
 </Script>
 </head>
 <body className="antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
 <noscript>
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img height="1" width="1" style={{ display: "none" }} alt="" src="https://www.facebook.com/tr?id=29055090117444003&ev=PageView&noscript=1" />
 </noscript>
 <ThemeProvider>
 <GlobalLoader>
 <Header />

 <PageTransition>
 <main className="flex-grow">
 {children}
 </main>
 <Footer />
 </PageTransition>
 </GlobalLoader>
 </ThemeProvider>
 </body>
 </html>
 );
}
