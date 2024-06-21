import { ObjectId } from 'mongodb';
import { createContext } from "react"

export const UsersListContext = createContext<UserListContextType>({} as UserListContextType);
export const PlayerListContext = createContext<PlayerListContextType>({} as PlayerListContextType);
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

export type PlayerListContextType = {
    playerList: Player[];
    setPlayerList: React.Dispatch<React.SetStateAction<Player[]>>
   
}

export type Player = {
    _id: ObjectId;
    name: string;
    isInGame: boolean;
    characters: Character[];
}

export type Character = {
    _id: ObjectId;
    class: string;
}

