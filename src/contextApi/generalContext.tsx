import { createContext } from "react"
import { Page } from "../models/Enums"

export const PageContext = createContext<PageContextType>({} as PageContextType)
export const PopUpArrayContext = createContext<PopUpArrayContextType>({} as PopUpArrayContextType)

export type PageContextType = {
    page: Page
    setPage: React.Dispatch<React.SetStateAction<Page>>
}

export type PopUpContextType = {
    popUpWindow: PopUpWindowType
    setPopUpWindow: React.Dispatch<React.SetStateAction<PopUpWindowType>>
}

export type PopUpArrayContextType = {
    popUpWindows: PopUpWindows
    setPopUpWindows: React.Dispatch<React.SetStateAction<PopUpWindows>>
}

export type PopUpWindowType = {
    userTriger?: boolean
    element: JSX.Element | null
}

export type PopUpWindows = {
    windows: PopUpWindowType[]
    userTriger?: boolean
}