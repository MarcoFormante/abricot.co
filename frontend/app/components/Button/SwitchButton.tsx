'use client'
import styles from "./Button.module.scss"

export function SwitchButton({svgName,label,isActive,onClick}:{
    svgName: "listeSvg" | "kanbanSvg" | "date",
    label:"Liste" | "Kanban" | "Calendrier",
    isActive:boolean,
    onClick?:()=>void
}){
    return (
        <button onClick={onClick} className={`${styles.switchBtn} ${isActive ? styles.switchActive : ""}`}>
            <span className={`${styles.switchSvg} ${styles[svgName]}`}></span>
            {label}
        </button>
    )
}