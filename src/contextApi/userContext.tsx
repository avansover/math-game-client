import { createContext } from "react"

export const UsersListContext = createContext<UserListContextType>({} as UserListContextType);
export const UserContext = createContext<UserContextType>({} as UserContextType);

export type UserListContextType = {
    users: User[]
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export type UserContextType = {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export type User = {
    Id: number
    UserName: string
}

