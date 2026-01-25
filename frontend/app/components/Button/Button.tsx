import scss from "./Button.module.scss"

export function Button(
    {
        label,
        style,
        type
    }
    :
    {
        label:string,
        style?:string,
        type: "btn-white" | "btn-grey" | "btn-softBlack" | "btn-black" 
    }
){


    return (
        <button className={`${scss.btn} ${scss[type]} ${style}`}>
            {label}
        </button>
    )
}