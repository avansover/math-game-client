import { Button } from "@mui/material"
import { Class } from "../../../models/Character"

export const ClassSelector = (props: {
    classType: Class
}) => {

    const selectClassHandler = () => {
      
    }

    return <Button onClick={selectClassHandler}>
        {props.classType.ClassName}
    </Button>
}