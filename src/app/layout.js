import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";
import React from "react";
import { ThemeProvider } from "./context/themeContext";
import Cursor from "./components/Cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export const metadata = {
  title: "Vinay Bachani",
  description: "Vinay Bachani Portfolio",
  icons: "images/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <Head>
          <meta name="description" content="Vinay Bachani Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/favicon.ico" />
          {/* <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" /> */}
        </Head>
        <body className={`${montserrat.variable} font-mont antialiased min-h-screen bg-light dark:bg-dark overflow-x-hidden`}>
          <Script strategy="beforeInteractive" id="theme-toggle-script">
            {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
          </Script>
          <Cursor />
          <NavBar />
          {children}
          <Footer />
          {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script> */}
        </body>
      </html>
    </ThemeProvider>
  );
}