import Link from "next/link"
import scss from "./Button.module.scss"
import { ButtonType } from "@/app/types/globals"


export function Button(
    {
        label,
        style,
        type,
        onClick,
        isLink,
        href,
        disabled
    }
    : ButtonType
    
){

    if (isLink) {
         return (
            <Link href={href || ""} className={`${scss.btn} ${scss[type]} ${style}`}>
                {label}
            </Link>
        )
    }

    return (
        <button disabled={disabled} className={`${scss.btn} ${scss[type]} ${style}`} onClick={onClick}>
            {label}
        </button>
    )
}