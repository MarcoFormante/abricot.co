'use client'
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "./MenuItem";
import { usePathname } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { useEffect, useState } from "react";

export function Header(){
    const [menuIsOpen,setMenuIsOpen] = useState(false)
    const pathname = usePathname()
    const user = useUser()
 
    const closeMenu = ()=>{
        setMenuIsOpen(false)
    }

    useEffect(()=>{
        if (menuIsOpen) {
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "auto"
        }
    },[menuIsOpen])

    return (
        <header  className="bg-[#FFFFFF] px-5 lg:px-25 max-sm:px-2 relative ">
            <nav className="max-lg:flex max-lg:justify-between max-lg:items-center max-lg:gap-4">
                <ul className={`flex items-center h-[94px] justify-between max-lg:w-full max-lg:items-center ${menuIsOpen ? "max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:h-[100vh] max-lg:bg-[#FFFFFF] max-lg:z-10 max-lg:flex-col max-lg:flex max-lg:items-center-safe  max-lg:justify-center-safe max-lg:gap-20 " : "flex items-center h-[94px] justify-between max-lg:w-full max-lg:items-center"}`}>
                    <li>
                        <Link href={"/dashboard"} onClick={closeMenu}>
                            <p className="hidden">Abricot</p>
                            <Logo 
                                fill={"#D3590B"}
                                width="147"
                                height="18.72"
                             />
                        </Link>
                    </li>
                    <li className={`flex items-center text-[#BD4F0A] ${menuIsOpen ? "max-lg:flex-col max-lg:gap-20" : "max-lg:hidden"}`}>
                        <MenuItem
                           label="Tableau de bord"
                           imgClass="svgTbord"
                           href="/dashboard"
                           pathname={pathname}
                           closeMenu={closeMenu}
                        />
                    
                        <MenuItem 
                           label="Projets"
                           imgClass="svgProjets"
                           href="/projets"
                           pathname={pathname}
                           closeMenu={closeMenu}
                        />
                    </li>
                    <li>
                        <Link href={"/mon-compte"} onClick={closeMenu} className={`w-[65px] h-[65px] uppercase  block flex justify-center items-center rounded-[32.5px] text-[14px] text-[#0F0F0F] ${pathname === "/mon-compte" ? "bg-[#C2510A] text-[#FFFFFF]" : "bg-[#FFE8D9]"}`}>
                            {
                            user?.name.split(" ")[0][0] && 
                                <span>{user?.name.split(" ")[1]}</span> ?
                                <span>{user?.name.split(" ")[0][0] + user?.name.split(" ")[1][0]}</span> :
                                "USER"
                            }
                        </Link>
                    </li>
                </ul>
                <div role="button" className={`cursor-pointer z-30 lg:hidden ${menuIsOpen ? "absolute right-5 top-5" : ""}`} onClick={()=>setMenuIsOpen(!menuIsOpen)}>
                  {  !menuIsOpen ?
                        <div className="flex flex-col w-8 h-8 justify-around">
                            <span className="border"></span>
                            <span className="border"></span>
                            <span className="border"></span>
                        </div> :

                        <div className="text-2xl">
                            <svg className="scale-125" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4805 0.146423C13.6757 -0.0487164 13.9923 -0.048798 14.1875 0.146423C14.3827 0.34165 14.3826 0.658205 14.1875 0.853455L7.87402 7.16595L14.1875 13.4794C14.3828 13.6747 14.3827 13.9922 14.1875 14.1874C13.9922 14.3827 13.6748 14.3827 13.4795 14.1874L7.16699 7.87396L0.854492 14.1874C0.659253 14.3827 0.341752 14.3826 0.146484 14.1874C-0.0487778 13.9922 -0.0487778 13.6747 0.146484 13.4794L6.45898 7.16595L0.146484 0.853455C-0.0487473 0.65819 -0.0487676 0.341675 0.146484 0.146423C0.341739 -0.0487981 0.658261 -0.0487981 0.853516 0.146423L7.16699 6.45892L13.4805 0.146423Z" fill="#6B7280"/>
                            </svg>
                        </div>
                    }
                </div>
            </nav>
          
        </header>
    )
}