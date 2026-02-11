import { useState } from "react";
import { Input } from "../../Input/Input";
import { deleteTaskComment, sendMessage, updateTaskComment } from "@/app/actions/comments";
import { useRouter } from "next/navigation";
import { Comment } from "./Comment";

export function ProjectComments({comments,task}:
  {
    comments:any[]
    task:any
  }){
    const [showComments,setShowComments] = useState(false)
    const [comment,setComment] = useState("")
    const [commentToEdit,setCommentToEdit] = useState("")
    const [wantsEdited,setWantsEdited] = useState<{id:string}| null>(null)
    const router = useRouter()

    
    const onSendMessage = async (e:React.FormEvent)=>{
      e.preventDefault()
      if (!comment) {
        return
      }
      const taskId = task.id
      const projectId = task.project.id
      const response = await sendMessage(comment,projectId,taskId)
      
      if (response?.success) {
        console.log("comment Sent");
        setComment("")
        router.refresh()
      }
    }


      const onEditComment = async (e:React.FormEvent,commentId:string)=>{
      e.preventDefault()
      if (!commentToEdit) {
        return
      }
      const taskId = task.id
      const projectId = task.project.id
      const response = await updateTaskComment(commentId,projectId,taskId,commentToEdit)
      
      if (response?.success) {
        console.log("comment Sent");
        setCommentToEdit("")
        setWantsEdited(null)
        router.refresh()
      }
    }





    const deleteComment = async (commentId:string)=> {
      const taskId = task.id
      const projectId = task.project.id

        const response = await deleteTaskComment(commentId,projectId,taskId)

        if (response?.success) {
          console.log("comment Sent");
          setComment("")
          setCommentToEdit("")
          setWantsEdited(null)
          router.refresh()
      }
    }


    const closeEdit = ()=>{
      setCommentToEdit("")
      setWantsEdited(null)
    }


    
    return (
      <div className="flex justify-between items-baseline mt-[24px]" >
        <div className="w-full pr-10">
            <h4 className="text-[14px] text-[#1F1F1F]">Commentaires ({comments?.length})</h4>
            <ul className="flex flex-col">

            {showComments &&   
              <form className="mt-[20px] mb-5" onSubmit={onSendMessage}>
                <div className="w-full relative">
                  <Input styles="pr-15" type="text" name="comment" label="Ecrire un commentaire" value={comment} onChange={(e)=>setComment(e.target.value)} />
                  <button aria-label="envoyer" className="absolute right-[20px] top-[45%] cursor-pointer rounded-[5px] ]">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  </button>
                </div>
              </form>
            }

            {
              (showComments && comments?.length >= 1) && 
               comments.map((comment)=> 
                <Comment 
                  key={comment.id} 
                  comment={comment}
                  setCommentToEdit={setCommentToEdit}
                  commentToEdit={commentToEdit}
                  deleteComment={deleteComment}
                  closeEdit={closeEdit}
                  wantsEdited={wantsEdited}
                  setWantsEdited={setWantsEdited}
                  onEditComment={onEditComment}
                />
              )
            }

            </ul>
        </div>

        <button className="cursor-pointer w-[32px] h-[32px] relative top-2" onClick={()=>setShowComments(!showComments)}>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${showComments ? "rotate-180" : ""}`}
          >
            <path
              d="M16.3535 8.70711L8.35352 0.707108L0.353515 8.70711"
              stroke="#0F0F0F"
            />
          </svg>
        </button>
      </div>
    );
}