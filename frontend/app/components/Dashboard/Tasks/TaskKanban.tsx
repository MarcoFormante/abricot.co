import { KanbanItem } from "./KanbanItem/KanbanItem";

export function TaskKanban(){
    return (
        <section className="flex gap-[22px] mt-[51px]">
            <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">À faire</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]">4</span>
                </div>
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    <KanbanItem tagType={"to-do"}/>
                    <KanbanItem tagType={"to-do"}/>
                    <KanbanItem tagType={"to-do"}/>
                </ul>
            </div>

            <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">En cours</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]">3</span>
                </div>
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    <KanbanItem tagType={"in-progress"}/>
                    <KanbanItem tagType={"in-progress"}/>
                    <KanbanItem tagType={"in-progress"}/>
                </ul>
            </div>

             <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">Terminées</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]">3</span>
                </div>
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    <KanbanItem tagType={"done"}/>
                    <KanbanItem tagType={"done"}/>
                    <KanbanItem tagType={"done"}/>
                </ul>
            </div>

        </section>
    )
}