import { useFormStatus } from "react-dom";
import { Button } from "../Button/Button";
import { ButtonType } from '../../types/globals';

export function Submit(props:ButtonType){
     const status = useFormStatus()

    return (
        <Button 
        {...props} 
        label={status.pending ? "En cours" : props?.label}  
        disabled={status?.pending || false} 
        />
    )
}