import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export function NewProject(){
    return (
        <div className="flex flex-col gap-[40px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F]">Créer un projet</h5>
            <form className='flex flex-col gap-[24px]'>
                <Input type='text' name='title' label='Title*' gap='6px' required/>
                <Input type='text' name='desc' label='Description*' gap='6px' required/>

                    <div>
                        <label htmlFor="collaborators" className='text-[14px]'>Contributeurs</label>
                        <select name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]" defaultValue={""}>
                            <option value="" className="text-[#6B7280] ">{"Choisir un ou plusieurs collaborateurs"}</option>
                        </select>
                    </div>

                    <div className='w-[181px] h-[50px] mt-[32px]'>
                        <Button type={"btn-grey"} label={"Ajouter un projet"} />
                    </div>
            </form>
        </div>
    )
}