import { Button, ButtonGroup, Card } from "@mui/material"
import { Player } from "../../contextApi/userContext"
import { ObjectId } from "mongodb"
import { useContext } from "react"
import { PopUpArrayContext } from "../../contextApi/generalContext"
import popUpWindowFunction from "../../utils/popUpWindowTool"
import { ClassSelectWindow } from "../popUps/ClassSelectWindow"

export const PlayerSideBarCard = (props: {
    player: Player
}
) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);

    const addPopUpWindowHundler = () => {

        let newPopUpArray = popUpWindowFunction.addPopUpWindow(popUpWindows, <ClassSelectWindow
            popUpIndex={popUpWindows.windows.length} />);

        setPopUpWindows(newPopUpArray);
    }

    return (<Card className="PlayerSideBarCard">
        PlayerSideBarCard: {props.player.name}

        <div style={{ display: "flex" }}>
            {
                props.player.characters.length > 0 ?
                    props.player.characters.map((character, i) => { return <div style={{ border: "black 1px solid", padding: "3px" }} key={i}>{character.class}</div> }) :
                    <div style={{ border: "black 1px solid", padding: "3px" }}>No characters</div>
            }
        </div>

        <Button variant="outlined" onClick={() => addPopUpWindowHundler()}>Add character</Button>

    </Card>)
}