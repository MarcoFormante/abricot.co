import { Logo } from "../Logo/Logo";

export function Footer(){
    const year = new Date().getFullYear()
    return (
        <footer className="h-[68px] bg-[#FFFFFF] mt-[48px] fixed bottom-0 left-[50%] translate-x-[-50%] w-full max-w-[1440px] m-auto">
            <div className="flex justify-between items-center h-full pl-[30px] pr-[54px]">
                <Logo fill={"#0F0F0F"} width={"101"} height={"12.86"}/>
                <p>Abricot {year}</p>
            </div>
        </footer>
    )
}