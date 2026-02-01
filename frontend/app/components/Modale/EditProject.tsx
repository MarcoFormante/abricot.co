import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const fakeData = {
    id:"1523",
    title:"Nom du projet",
    desc: "Description Projet",
    date:"2026/03/09",
    collabs : [
        {
        id:"225",
        name:"Ciccio Banana" 
        },
        {
            id:"335",
            name:"Stefano Bellavita"
        }
    ],
    status:"to-do"
}

export function EditProject(){
    return (
        <div className="flex flex-col gap-[40px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F]">Modifier un projet</h5>
            <form className='flex flex-col gap-[24px]'>
                <Input type='text' name='title' label='Title*' gap='6px' required value={fakeData.title ?? ""}/>
                <Input type='text' name='desc' label='Description*' gap='6px' required value={fakeData.desc ?? ""}/>

                    <div>
                        <label htmlFor="collaborators" className='text-[14px]'>Contributeurs</label>
                        <select name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]" defaultValue={""}>
                            <option value="" className="text-[#6B7280] ">{fakeData.collabs.length ? `${fakeData.collabs.length < 2 ? "1 collaborateur" : fakeData.collabs.length + " collaborateurs" } ` : "Choisir un ou plusieurs collaborateurs"}</option>
                            {fakeData.collabs.map((c) => <option style={{background:"orange"}} key={c.id} value={c.id} className="text-[#6B7280]">{c.name}</option> ) }
                        </select>
                    </div>

                    <div className='w-[181px] h-[50px] mt-[32px]'>
                        <Button type={"btn-grey"} label={"Enregistrer"} />
                    </div>
            </form>
        </div>
    )
}