import { Button, ButtonGroup, Card } from "@mui/material"
import { Player } from "../../contextApi/userContext"
import { ObjectId } from "mongodb"

export const PlayerJoinCard = (props: {
    player: Player,
    addPlayerToGame: Function
    removePlayerFromGame: Function
}
) => {

    const addPlayerToGame = (playerId: ObjectId) => {
        props.addPlayerToGame(playerId)
    }

    const removePlayerFromGame = (playerId: ObjectId) => {
        props.removePlayerFromGame(playerId)
    }


    return (<Card className="PlayerJoinCard">
        player card: {props.player.name}
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
    </Card>)
}