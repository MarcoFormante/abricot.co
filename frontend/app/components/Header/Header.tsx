'use client'
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";
import { MenuItem } from "./MenuItem";
import { usePathname } from "next/navigation";

export function Header(){
    const pathname = usePathname()
    console.log(pathname === "/mon-compte");
    

    return (
        <header className="bg-[#FFFFFF] px-25">
            <nav>
                <ul className={styles.navListContainer}>
                    <li>
                        <Link href={"/dashboard"}>
                            <Logo 
                                fill={"#D3590B"}
                                width="147"
                                height="18.72"
                             />
                        </Link>
                    </li>
                    <li className={styles.navCenterItem}>
                        <MenuItem
                           label="Tableau de bord"
                           imgClass="svgTbord"
                           href="/dashboard"
                           pathname={pathname}
                        />
                    
                        <MenuItem 
                           label="Projets"
                           imgClass="svgProjets"
                           href="/projets"
                           pathname={pathname}
                        />
                    </li>
                    <li>
                        <Link href={"/mon-compte"} className={`w-[65px] h-[65px]  block flex justify-center items-center rounded-[32.5px] text-[14px] text-[#0F0F0F] ${pathname === "/mon-compte" ? "bg-[#D3590B] text-[#FFFFFF]" : "bg-[#FFE8D9]"}`}>
                            AD
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}