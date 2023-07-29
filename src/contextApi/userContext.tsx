import { createContext } from "react"

export const UserContext = createContext<UserContextType>({} as UserContextType);


export type UserContextType = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export type User = {

}

