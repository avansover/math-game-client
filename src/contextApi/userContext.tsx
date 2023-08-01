import { createContext } from "react"

export const UsersContext = createContext<UserContextType>({} as UserContextType);


export type UserContextType = {
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export type User = {
    Id: number
    UserName: string
}

