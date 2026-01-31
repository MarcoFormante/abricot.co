import { AiButton } from "../Button/AiButton";

export function AiInput(){
    return (
        <div className="relative">
            <input className="w-full bg-[#F9FAFB] py-[18px] pl-[32px] pr-[64px] rounded-[80px] ai-input" type="text" name="aiText" id="aiText" placeholder="Décrivez les tâches que vous souhaitez ajouter..." />
            <AiButton/>
        </div>
    )
}