import { useState } from "react";
import { deleteTaskComment, sendMessage, updateTaskComment } from "@/app/actions/comments";
import { useRouter } from "next/navigation";
import { Comment } from "./Comment";
import { CommentInterface, TaskInterface } from "@/app/types/globals";
import { useAlert } from "@/app/context/AlertContext";
import { CircleTag } from '../../Collaborators/CircleTag';
import { useUser } from "@/app/context/UserContext";
import { Submit } from "../../Submit/Submit";

export function ProjectComments({comments,task}:
  {
    comments:CommentInterface[]
    task:TaskInterface
  }){
    const [showComments,setShowComments] = useState(false)
    const [comment,setComment] = useState("")
    const [commentToEdit,setCommentToEdit] = useState("")
    const [wantsEdited,setWantsEdited] = useState<{id:string}| null>(null)
    const router = useRouter()
    const setAlert = useAlert()
    const userInfo = useUser()

    
    const onSendMessage = async (e:React.FormEvent)=>{
      e.preventDefault()
      if (!comment) {
        return
      }
      const taskId = task.id ?? ""
      const projectId = task?.project?.id || ""
      const response = await sendMessage(comment,projectId,taskId)
      
      if (response?.success) {
        setComment("")
        setAlert({type:"success",message:"Commentaire envoyé"})
        router.refresh()
      }else{
          const errors = response?.errors || response?.errorMessage
          if (errors) {
              setAlert({type:"error",message:errors})
          }
      }
    }


      const onEditComment = async (e:React.FormEvent,commentId:string)=>{
        e.preventDefault()
        if (!commentToEdit) {
          return
        }
        const taskId = task.id ?? ""
        const projectId = task?.project?.id ?? ""
        const response = await updateTaskComment(commentId,projectId,taskId,commentToEdit)
      
        if (response?.success) {
          setCommentToEdit("")
          setWantsEdited(null)
          setAlert({type:"success",message:"Commentaire modifié"})
          router.refresh()
        }else{
            const errors = response?.errors || response?.errorMessage
            if (errors) {
                setAlert({type:"error",message:errors})
            }
        }   
      } 



    const deleteComment = async (commentId:string)=> {
      const taskId = task.id ?? ""
      const projectId = task?.project?.id ?? ""
      const response = await deleteTaskComment(commentId,projectId,taskId)
      if (response?.success) {
          setComment("")
          setCommentToEdit("")
          setWantsEdited(null)
          setAlert({type:"success",message:"Commentaire supprimé"})
          router.refresh()
      }else{
            const errors = response?.errors || response?.errorMessage
            if (errors) {
                setAlert({type:"error",message:errors})
            }
      }   
    }
    
  /**
   * Toggle edit comment
   */
    const closeEdit = ()=>{
      setCommentToEdit("")
      setWantsEdited(null)
    }


    
    return (
      <div className="flex justify-between items-baseline mt-[24px]" >
        <div className="w-full pr-10 max-md:pr-0">
            <h4 className="text-[14px] text-[#1F1F1F]">Commentaires ({comments?.length})</h4>
            <ul className="flex flex-col">

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
                  isCreator={comment.author.id === task.creatorId}
                  isUserCreator={task.creatorId === userInfo?.id}
                  userInfo={userInfo}
                />
              )
            }

            </ul>
            
            {showComments &&   
              <form className="mt-[20px] mb-5 w-full" onSubmit={onSendMessage}>
                <div className="flex w-full gap-[14px]">
                  <CircleTag name={userInfo?.name} isOwner={userInfo?.id === task.creatorId}/>
                  <label htmlFor="comment" className="outScreen">Envoyer un message</label>
                  <textarea onChange={(e)=>setComment(e.target.value)} rows={4} value={comment} name="comment" id="comment" className="border border-[#e5e7eb] rounded-[10px] p-5 w-full text-[10px] min-h-[83px]" placeholder="Ajouter un commentaire..."></textarea>
                </div> 
                <div className="w-[209px] h-[50px] float-right mt-4">
                    <Submit type="btn-grey" label="Envoyer"/>
                </div>
                
              </form>
            }
        </div>

        <button aria-label="Lire les commentaires" className="cursor-pointer w-[32px] h-[32px] relative top-2" onClick={()=>setShowComments(!showComments)}>
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