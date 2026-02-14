import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "../assets/sass/globals.css"
import { cookies } from "next/headers";
import { UserProvider } from "../context/UserContext";
import { AlertProvider } from "../context/AlertContext";
import { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: {
    template: '%s | Abricot.co', 
    default: 'Abricot.co',
  },
  description:"App innovante"
};


export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let user = {
    id:"",
    name:"",
    email:""
  }

  try {
    const userInfo =(await cookies()).get("user_info")?.value
    user = userInfo ? JSON.parse(userInfo) : null

  } catch (error) {
      redirect("/")
  }

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
