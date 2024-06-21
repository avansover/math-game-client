import { Button, ButtonGroup, Card } from "@mui/material"
import { Player } from "../../contextApi/userContext"
import { ObjectId } from "mongodb"

export const PlayerSideBarCard = (props: {
    player: Player
}
) => {

    return (<Card className="PlayerSideBarCard">
        PlayerSideBarCard: {props.player.name}

        <div style={{ display: "flex" }}>
            {
                props.player.characters.length > 0 ?
                    props.player.characters.map((character, i) => { return <div style={{ border: "black 1px solid", padding: "3px" }} key={i}>{character.class}</div> }) :
                    <div style={{ border: "black 1px solid", padding: "3px" }}>No characters</div>
            }
        </div>

        <Button variant="outlined" onClick={() => console.log("Add character")}>Add character</Button>

    </Card>)
}