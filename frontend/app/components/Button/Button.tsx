import Link from "next/link"
import scss from "./Button.module.scss"

export function Button(
    {
        label,
        style,
        type,
        onClick,
        isLink,
        href
    }
    :
    {
        label:string | React.ReactNode,
        style?:string,
        type: "btn-white" | "btn-grey" | "btn-softBlack" | "btn-black" | "btn-orange" ,
        onClick?:()=>void,
        isLink?:boolean,
        href?:string
    }
){

    if (isLink) {
         return (
            <Link href={href || ""} className={`${scss.btn} ${scss[type]} ${style}`}>
                {label}
            </Link>
        )
    }

    return (
        <button className={`${scss.btn} ${scss[type]} ${style}`} onClick={onClick}>
            {label}
        </button>
    )
}