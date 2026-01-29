import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import { Button } from "@/app/components/Button/Button";
import { Project } from "@/app/components/Project/Project";

export default function Projets(){
    return(
        <main className="pt-[89px] px-25 pb-[78px]">
            <div className="flex justify-between">
                <AdminMainTitle title={"Mes projets"} text={"Gérez vos projets "}/>
                <div className="h-[50px] self-end">
                    <div className="w-[181px] h-[50px]">
                        <Button type={"btn-black"} label="+ Créer un projet"/>
                    </div>
                </div>
            </div>

            <section className="mt-[64px]">
                <ul className="grid grid-cols-3 gap-[14px] text-[#1F1F1F]">
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                </ul>
            </section>
        </main>    
        )
}