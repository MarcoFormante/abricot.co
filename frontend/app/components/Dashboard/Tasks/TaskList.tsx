import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { ListItem } from './ListItem/ListItem';
import { Tag } from './Tag';


export function TaskList(){
    return (
        <section className='mt-[30px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[10px]'>
            <div className='pt-[40px]  px-[59px] flex justify-between '>
                <div className='flex flex-col gap-[8px]'>
                    <h2 className='font-semibold text-[18px]'>Mes tâches assignées</h2>
                    <p className='text-[#6B7280]'>Par ordre de priorité</p>
                </div>
                <div>
                    <form>
                        <div className='relative w-[357px] flex h-[63px]'>
                            <Input 
                                type={"search"} 
                                name='searchTask' 
                                placeholder={"Rechercher une tâche"}
                            />
                            <span className='searchSvg'></span>
                        </div>
                    </form>
                </div>
            </div>

            <div className='px-[59px] mt-[41px] pb-[40px]'>
                <ul className='flex flex-col gap-[17px]'>
                    <ListItem tagType={"to-do"}/>
                    <ListItem tagType={"in-progress"}/>
                    <ListItem tagType={"done"}/>
                </ul>
            </div>
        </section>
    )
}