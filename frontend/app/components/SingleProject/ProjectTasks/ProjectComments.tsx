import { useState } from "react";

export function ProjectComments({comments}:{comments:[any]}){
    const [showComments,setShowComments] = useState(false)

    return (
      <div className="flex justify-between items-center mt-[24px]">
        <div className="">
            <h4 className="text-[14px] text-[#1F1F1F]">Commentaires ({comments?.length})</h4>
            <ul className="flex flex-col">
                 {
                showComments && comments.length &&
                comments.map((c)=> 
                <li key={c.id} className="mt-5">
                    <p className="font-semibold text-[16px]">{c.author.name} </p>
                    <p className="text-[#6b7280] text-[14px] pr-6 pb-2">{c.content}</p>
                </li>)
            }
            </ul>
        </div>
        

        <button className="cursor-pointer" onClick={()=>setShowComments(!showComments)}>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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