import scss from "./Button.module.scss"

export function Button(
    {
        label,
        style,
        type,
        onClick
    }
    :
    {
        label:string | React.ReactNode,
        style?:string,
        type: "btn-white" | "btn-grey" | "btn-softBlack" | "btn-black" | "btn-orange" ,
        onClick?:()=>void
    }
){


    return (
        <button className={`${scss.btn} ${scss[type]} ${style}`} onClick={onClick}>
            {label}
        </button>
    )
}