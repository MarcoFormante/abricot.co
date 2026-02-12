'use client'

import { createContext,useContext } from "react"
import { UserInterface } from "../types/globals";

const UserContext = createContext<UserInterface | null>(null)

export function UserProvider({children,user}:{
    children:React.ReactNode,
    user:UserInterface
}){
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext)