'use client'

import { useState } from "react";
import { Button } from "../../Button/Button";
import { ModaleContainer } from "../../Modale/ModaleContainer";
import { NewProject } from "../../Modale/NewProject";

export function CreateProjectButton(){
    const [showModale,setShowModale] = useState({type:""})

    return (
      <div className="h-[50px] self-center sm:self-end">
       {showModale && showModale.type === "newProject" && 
        <ModaleContainer showModale={showModale} setShowModale={setShowModale}>
            <NewProject closeModale={()=> setShowModale({type:""})} />
        </ModaleContainer>}
        <div className="w-[181px] h-[50px]">
          <Button onClick={()=>setShowModale({type:"newProject"})} type={"btn-black"} label="+ Créer un projet" />
        </div>
      </div>
    );
}