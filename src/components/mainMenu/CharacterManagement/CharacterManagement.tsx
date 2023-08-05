import { useEffect, useState } from "react"
import axiosTool from "../../../utils/axiosTool"
import { Character, Class } from "../../../models/Character"
import { CharacterSelector } from "./CharacterSelector"

export const CharacterCreation = () => {

    const [characterList, setCharacterList] = useState<Character[]>([])

    useEffect(() => {

        const getCharacters = async () => {
            try {
                let resp = await axiosTool.get("character/get-characters")
                setCharacterList(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCharacters()

    }, [])

    return (<div className="CharacterManagement">
        <div className="CharacterHolder"></div>
        <div className="AddCharacter"></div>
        {characterList.map((character: Character, characterIndex: number) => {
            return <CharacterSelector
                key={characterIndex}
                character={character}
            />
        })}
    </div>)
}