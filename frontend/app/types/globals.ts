export type ButtonType = {
    label:string | React.ReactNode,
    style?:string,
    type: "btn-white" | "btn-grey" | "btn-softBlack" | "btn-black" | "btn-orange" ,
    onClick?:()=>void,
    isLink?:boolean,
    href?:string,
    disabled?:boolean
}



export interface AlertData {
  type: "error" | "success",
  message: string
}