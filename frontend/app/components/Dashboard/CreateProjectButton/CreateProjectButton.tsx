'use client'

import { useState } from "react";
import { Button } from "../../Button/Button";
import { ModalContainer } from "../../Modale/ModalContainer";
import { NewProject } from "../../Modale/NewProject";

export function CreateProjectButton(){
    const [showModal,setShowModal] = useState({type:""})

    return (
      <div className="h-[50px] self-end">
       {showModal && showModal.type === "newProject" && 
        <ModalContainer showModale={showModal} setShowModal={setShowModal}>
            <NewProject closeModal={()=> setShowModal({type:""})} />
        </ModalContainer>}
        <div className="w-[181px] h-[50px]">
          <Button onClick={()=>setShowModal({type:"newProject"})} type={"btn-black"} label="+ Créer un projet" />
        </div>
      </div>
    );
}