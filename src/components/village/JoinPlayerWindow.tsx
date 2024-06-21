import { useContext } from "react";
import { PopUpContext } from "../../contextApi/generalContext";
import { Button, ButtonGroup } from "@mui/material";
import { PlayerListContext } from "../../contextApi/userContext";
import { PlayerJoinCard } from "./PlayerJoinCard";
import { ObjectId } from "mongodb";

export const JoinPlayerWindow = () => {

    const { setPopUpWindow } = useContext(PopUpContext);
    const { playerList, setPlayerList } = useContext(PlayerListContext)

    const closeJoinUserWindow = () => {

        setPopUpWindow({ isOpen: false, element: null });

    }

    const addPlayerToGame = (playerId: ObjectId) => {

        var updatedPlayerList = playerList.map((player) => ({
            ...player,
            isInGame: player._id === playerId ? true : player.isInGame
        }))

        setPlayerList(updatedPlayerList);
    }

    const removePlayerFromGame = (playerId: ObjectId) => {

        var updatedPlayerList = playerList.map((player) => ({
            ...player,
            isInGame: player._id === playerId ? false : player.isInGame
        }))

        setPlayerList(updatedPlayerList);
    }

    return (<div className="JoinPlayerWindow">
        <div style={{ display: 'flex' }}>
            {playerList.map((x, i) => {
                return <PlayerJoinCard key={i}
                    addPlayerToGame={addPlayerToGame}
                    removePlayerFromGame={removePlayerFromGame}
                    player={x}
                />
            })}
        </div>

        <ButtonGroup>
            <Button
                variant="outlined"
                color="success"
            >Add Player</Button>
            <Button
                onClick={closeJoinUserWindow}
                variant="outlined"
                color="error"
            >Done</Button>
        </ButtonGroup>
    </div>)
}