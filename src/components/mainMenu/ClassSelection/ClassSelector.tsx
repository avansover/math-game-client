import { Button } from "@mui/material"
import { HeroClass } from "../../../models/Character"

export const ClassSelector = (props: {
    classType: HeroClass
}) => {

    const selectClassHandler = () => {
      
    }

    return <Button onClick={selectClassHandler}>
       
    </Button>
}