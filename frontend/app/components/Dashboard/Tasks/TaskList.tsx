/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { Input } from '../../Input/Input';
import { ListItem } from './ListItem/ListItem';

export function TaskList({tasks}:{tasks:any[]}){
    const [filteredTasks,setFilteredTasks] = useState<any[]>(tasks ||[])
    const [searchValue,setSearchValue] = useState("")


    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value)
        if (!e.target.value) {
            setFilteredTasks(tasks)
        }
    }

    /**
     * Filters tasks based on the search value input.
     * If no search value is provided, displays all tasks.
     * Otherwise, filters tasks by matching the search term against task titles (case-insensitive).
     * @param e - The form or pointer event triggered by user interaction (form submission or click)
     * @returns void
     */
    const filterBySearchValue = (e:React.FormEvent | React.PointerEvent)=>{
        e.preventDefault()

        if (!searchValue) {
            setFilteredTasks(tasks)
        }else{
            const filtered = tasks.filter((t:any)=>{
                return (t.title).toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredTasks(filtered || [])
        }
    }


    return (
        <section className='mt-[30px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[10px]'>
            <div className='pt-[40px]  px-[59px] flex justify-between '>
                <div className='flex flex-col gap-[8px]'>
                    <h2 className='font-semibold text-[18px]'>Mes tâches assignées</h2>
                    <p className='text-[#6B7280]'>Par ordre de priorité</p>
                </div>
                <div>
                    <form onSubmit={filterBySearchValue}>
                        <div className='relative w-[357px] flex h-[63px]'>
                            <Input 
                                type={"search"} 
                                name='searchTask' 
                                placeholder={"Rechercher une tâche"}
                                onChange={onInputChange}
                            />
                            <span className='searchSvg' onClick={filterBySearchValue}></span>
                        </div>
                    </form>
                </div>
            </div>

            <div className='px-[59px] mt-[41px] pb-[40px]'>
               { filteredTasks && filteredTasks?.length ?
                    <ul className='flex flex-col gap-[17px]'>
                        {filteredTasks.map((task:any)=> <ListItem key={task.id} task={task}/> )}
                    </ul>
                    :
                    <div>
                        AUCUNE TÂCHE ASSIGNÉE
                    </div>
                }
            </div>
        </section>
    )
}