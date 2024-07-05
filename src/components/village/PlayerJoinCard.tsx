import { Button, ButtonGroup, Card } from "@mui/material"
import { Player } from "../../contextApi/userContext"
import { ObjectId } from "mongodb"
import popUpWindowFunction from "../../utils/popUpWindowTool"
import { useContext } from "react"
import { PopUpArrayContext } from "../../contextApi/generalContext"
import { DeletePlayerWindow } from "../popUps/DeletePlayerWindow"

export const PlayerJoinCard = (props: {
    player: Player,
    addPlayerToGame: Function
    removePlayerFromGame: Function
}
) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);

    const addPlayerToGame = (playerId: ObjectId) => {
        props.addPlayerToGame(playerId)
    }

    const removePlayerFromGame = (playerId: ObjectId) => {
        props.removePlayerFromGame(playerId)
    }

    const openPopUpWindowHundler = () => {

        let newPopUpArray = popUpWindowFunction.addPopUpWindow(popUpWindows, <DeletePlayerWindow
            popUpIndex={popUpWindows.windows.length}
            player={props.player}
            />);

        setPopUpWindows(newPopUpArray);
    }


    return (<Card className="PlayerJoinCard">
        player: {props.player.name}
        <div style={{ display: "flex" }}>
            {
                props.player.characters.length > 0 ?
                    props.player.characters.map((character, i) => { return <div style={{ border: "black 1px solid", padding: "3px" }} key={i}>{character.class}</div> }) :
                     <div style={{ border: "black 1px solid", padding: "3px" }}>No characters</div>
            }
        </div>
        <ButtonGroup>
            <Button onClick={() => addPlayerToGame(props.player._id)}>Join Game</Button>
            <Button onClick={() => removePlayerFromGame(props.player._id)}>Leave Game</Button>
        </ButtonGroup>
        <Button onClick={openPopUpWindowHundler} color="error" variant="outlined">Delete Player</Button>
    </Card>)
}