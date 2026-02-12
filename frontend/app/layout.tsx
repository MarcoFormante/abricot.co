import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/assets/sass/globals.css"
import "./tailwind.css";
import { ScrollToTop } from "./utils/ScrollToTop";
import { AlertProvider } from "./context/AlertContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abricot.co",
  description: "Plateforme innovante pour la gestion de vos projets"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-360  m-auto bg-[#F9FAFB]`} >
        <ScrollToTop/>
        <AlertProvider>
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
