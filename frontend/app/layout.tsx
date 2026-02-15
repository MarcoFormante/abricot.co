import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/assets/sass/globals.css"
import "./tailwind.css";
import { ScrollToTop } from "./utils/ScrollToTop";
import { AlertProvider } from "./context/AlertContext";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    template: '%s | Abricot.co', 
    default: 'Abricot.co',
  },
  description:"App innovante"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className}  antialiased max-w-360  m-auto bg-[#F9FAFB]`} >
        <ScrollToTop/>
        <AlertProvider>
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
