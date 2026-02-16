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
  description:"Optimisez votre productivité avec Abricot.co. Gérez vos projets, assignez des tâches et suivez votre progression via nos vues Kanban et Listes. La plateforme SaaS collaborative pensée pour l'efficacité."
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
