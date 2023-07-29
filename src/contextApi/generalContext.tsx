import { createContext } from "react"
import { Page } from "../models/Enums"

export const PageContext = createContext<PageContextType>({} as PageContextType)
export const PopUpContext = createContext<PopUpContextType>({} as PopUpContextType)

export type PageContextType = {
    page: Page
    setPage: React.Dispatch<React.SetStateAction<Page>>
}

export type PopUpContextType = {
    isPopUpOpen: boolean
    setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>
}