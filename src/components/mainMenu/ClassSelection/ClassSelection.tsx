import { useEffect, useState } from "react"
import axiosTool from "../../../utils/axiosTool"
import { HeroClass } from "../../../models/Character"
import { ClassSelector } from "./ClassSelector"


export const ClassSelection = () => {
    const [characterList, setCharacterList] = useState<HeroClass[]>([])

    useEffect(() => {

        const getClasses = async () => {
            try {
                let resp = await axiosTool.get("class/get-classes")
                setCharacterList(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
        getClasses()

    }, [])

    return (<div className="ClassSelection">
        {characterList.map((classType: HeroClass, classindex: number) => {
            return <ClassSelector
            key={classindex}
            classType={classType}
            />
        })}
    </div>)
}