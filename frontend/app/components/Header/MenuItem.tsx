"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";


export function MenuItem({href,label,imgClass}:{
    href:"/dashboard" | "/projets",
    label: "Tableau de bord" | "Projets",
    imgClass:"svgTbord" | "svgProjets"
}){
    const pathname = usePathname()

    return (
        <Link href={href}>
            <div className={`${pathname === href ? styles.activeMenuItem : ""} ${styles.menuItem} rounded-[10px]  w-62 py-6.75 px-[42.5px] flex items-center justify-center gap-4` }>
                <span className={`${styles.svgItem} ${styles[imgClass]} `}></span>
                <span className={styles.label}>{label}</span> 
            </div>
        </Link>
    )
}