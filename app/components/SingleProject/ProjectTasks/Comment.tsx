import {  useMemo } from "react";
import { CommentInterface, UserInterface } from "@/app/types/globals";
import { CircleTag } from "../../Collaborators/CircleTag";

export function Comment({
    comment,
    wantsEdited,
    setWantsEdited,
    setCommentToEdit,
    deleteComment,
    onEditComment,
    commentToEdit,
    closeEdit,
    isCreator,
    isUserCreator,
    userInfo
}:{
    comment:CommentInterface,
    wantsEdited:{id:string} | null,
    setWantsEdited:React.Dispatch<React.SetStateAction<{id:string}|null>>,
    setCommentToEdit:React.Dispatch<React.SetStateAction<string>>,
    deleteComment:(id:string)=>void,
    onEditComment:(e:React.FormEvent,id:string)=>void,
    commentToEdit:string,
    closeEdit:()=>void,
    isCreator:boolean,
    isUserCreator:boolean,
    userInfo:UserInterface | null
}){

  console.log(isUserCreator,comment.author.id === userInfo?.id);
  
 
    /**
     * Check if the message was modified so add the correct due Date 
     * @return date:string, isModified:boolean 
     */
    const { date,isModified } = useMemo(() => {
        const created = new Date(comment.createdAt);
        const updated = new Date(comment.updatedAt);
        const modified = updated > created;

        return {
          date: (modified ? updated : created).toLocaleDateString("fr-FR",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}),
          isModified:modified
        };

    }, [comment.createdAt, comment.updatedAt]);
      

    return (
        <li key={comment.id} className="flex mt-[24px] gap-[14px]">
             <CircleTag name={comment.author.name} isOwner={isCreator}/>
              <div className=" border border-[#e5e7eb] rounded-[10px] min-h-[83px] px-[14px] py-[18px] max-md:flex max-md:flex-col max-md:gap-1 max-sm:px-3  max-sm:pt-3 w-full">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-normal text-[#000000]">{comment.author.name} </p>
                  <span className=" text-[10px] text-[#6B7280]" aria-label={isModified ? "Modifié le" : "Publié le"}> {date.replace(" à",",")} {isModified ? "(Modifié)" : ""}</span>
                </div>
                { wantsEdited?.id !== comment.id && <p className="text-[#000000] text-[10px] pr-50 mt-[16px]  max-md:pr-0 break-all">{comment.content}</p>}

           {  comment.author.id === userInfo?.id &&  
                <div className="float-right flex gap-4 self-end">
                  <button className="cursor-pointer" aria-label="supprimer le commentaire" onClick={()=>deleteComment(comment.id)}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M14 12V17" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 7H20" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                      </svg>
                  </button>
                  <button className="cursor-pointer" aria-label="modifier le commentaire" aria-expanded={wantsEdited?.id === comment.id} onClick={()=>{
                      setWantsEdited(!wantsEdited ? {id:comment.id} : null)
                      setCommentToEdit(comment.content)
                    }}
                    >
                    <svg width="14" aria-hidden="true" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.84794 2.94394L0.538902 9.25297C0.451971 9.33995 0.397399 9.45403 0.384248 9.57629L0.00327009 13.004C-0.0050645 13.0793 0.00257643 13.1555 0.025694 13.2277C0.0488115 13.2999 0.0868858 13.3663 0.137432 13.4228C0.187978 13.4792 0.24986 13.5244 0.319037 13.5553C0.388215 13.5862 0.463133 13.6022 0.538902 13.6022C0.558705 13.6022 0.578492 13.6011 0.598178 13.5989L4.02806 13.2179C4.15032 13.2048 4.2644 13.1502 4.35138 13.0633L10.6583 6.7548L6.84794 2.94394Z" fill="#6B7280"/>
                      <path d="M13.1294 1.99777L11.605 0.473317C11.3018 0.170252 10.8907 0 10.462 0C10.0334 0 9.62225 0.170252 9.31909 0.473317L7.61035 2.18206L11.4207 5.99292L13.1299 4.28363C13.4329 3.98041 13.6031 3.56925 13.603 3.14059C13.6029 2.71193 13.4325 2.30085 13.1294 1.99777Z" fill="#6B7280"/>
                    </svg>
                  </button>
                </div>}

              {wantsEdited?.id === comment.id && 
                <div role="group" aria-labelledby={`edit-label-${comment.id}`}>
                  <form className="mt-[20px] mb-5" onSubmit={(e)=>onEditComment(e,comment.id)}>
                    <div className="w-full relative">
                      <label htmlFor={`textarea-${comment.id}`} id={`edit-label-${comment.id}`}>Modifier le commentaire</label>
                      <textarea  rows={4} value={commentToEdit} onChange={(e)=>setCommentToEdit(e.target.value)} name="comment" id={`textarea-${comment.id}`} className="border border-[#e5e7eb] rounded-[10px] p-5 w-full text-[10px] min-h-[83px] pr-25" placeholder="Ajouter un commentaire..."></textarea>
                      <div className="absolute  right-[20px] top-[45%] flex items-center gap-2">
                        <button aria-label="envoyer" className="cursor-pointer rounded-[5px] ">
                          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </button>
                        <button aria-label="fermer" className="cursor-pointer" onClick={closeEdit}>
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4805 0.146423C13.6757 -0.0487164 13.9923 -0.048798 14.1875 0.146423C14.3827 0.34165 14.3826 0.658205 14.1875 0.853455L7.87402 7.16595L14.1875 13.4794C14.3828 13.6747 14.3827 13.9922 14.1875 14.1874C13.9922 14.3827 13.6748 14.3827 13.4795 14.1874L7.16699 7.87396L0.854492 14.1874C0.659253 14.3827 0.341752 14.3826 0.146484 14.1874C-0.0487778 13.9922 -0.0487778 13.6747 0.146484 13.4794L6.45898 7.16595L0.146484 0.853455C-0.0487473 0.65819 -0.0487676 0.341675 0.146484 0.146423C0.341739 -0.0487981 0.658261 -0.0487981 0.853516 0.146423L7.16699 6.45892L13.4805 0.146423Z" fill="#6B7280"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              }
               </div>
        </li>    
    )
}