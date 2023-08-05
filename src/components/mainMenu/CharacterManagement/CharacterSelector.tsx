import { Button } from "@mui/material"
import { Character } from "../../../models/Character"

export const CharacterSelector = (props: {
    character: Character
}) => {

   

    const selectCharacterHandler = () => {
     
    }

    return <Button onClick={selectCharacterHandler}>
        {props.character.Name}
    </Button>
}