import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../assets/sass/globals.css"

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-[#F9FAFB] min-h-screen">
        <Header/>
            {children}
        <Footer/>
      </div>
  );
}
