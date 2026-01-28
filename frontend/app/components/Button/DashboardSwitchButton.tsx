import styles from "./Button.module.scss"

export function DashboardSwitchButton({svgName,label,isActive,onClick}:{
    svgName: "listeSvg" | "kanbanSvg",
    label:"Liste" | "Kanban",
    isActive:boolean,
    onClick:()=>void
}){
    return (
        <button onClick={onClick} className={`${styles.switchBtn} ${isActive ? styles.switchActive : ""}`}>
            <span className={`${styles.switchSvg} ${styles[svgName]}`}></span>
            {label}
        </button>
    )
}