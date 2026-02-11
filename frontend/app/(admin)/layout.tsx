import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../assets/sass/globals.css"
import { cookies } from "next/headers";
import { UserProvider } from "../context/UserContext";
import { AlertProvider } from "../context/AlertContext";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 const userInfo =(await cookies()).get("user_info")?.value
  const user = userInfo ? JSON.parse(userInfo) : null

  return (
     <UserProvider user={user}>
      <div className="bg-[#F9FAFB] min-h-screen">
        <Header />
        <AlertProvider>
          {children}
        </AlertProvider>
        <Footer />
      </div>
    </UserProvider>
  );
}
