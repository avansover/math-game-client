import { createContext } from "react"
import { Page } from "../models/Enums"

export const PageContext = createContext<PageContextType>({} as PageContextType)
export const PopUpContext = createContext<PopUpContextType>({} as PopUpContextType)

export type PageContextType = {
    page: Page
    setPage: React.Dispatch<React.SetStateAction<Page>>
}

export type PopUpContextType = {
    popUpWindow: PopUpWindowType
    setPopUpWindow: React.Dispatch<React.SetStateAction<PopUpWindowType>>
}

export type PopUpWindowType = {
    isOpen: boolean
    element: JSX.Element | null
}