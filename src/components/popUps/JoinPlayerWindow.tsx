import { useContext, useState } from "react";
import { PopUpArrayContext } from "../../contextApi/generalContext";
import { Button, ButtonGroup } from "@mui/material";
import { PlayerListContext } from "../../contextApi/userContext";
import { PlayerJoinCard } from "../village/PlayerJoinCard";
import { ObjectId } from "mongodb";
import popUpWindowFunction from "../../utils/popUpWindowTool";
import { AddPlayerWindow } from "./AddPlayerWindow";

export const JoinPlayerWindow = (props: { popUpIndex: number }) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);
    const { playerList, setPlayerList } = useContext(PlayerListContext)

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

    const removeHighestIndexPopUp = () => {

        var newPopUpArray = popUpWindowFunction.removePopUpWindow(popUpWindows);
        setPopUpWindows(newPopUpArray);
    }

    const openPopUpWindowHundler = () => {

        let newPopUpArray = popUpWindowFunction.addPopUpWindow(popUpWindows, <AddPlayerWindow popUpIndex={popUpWindows.windows.length} />);

        setPopUpWindows(newPopUpArray);
    }

    return (<div className="JoinPlayerWindow"
        style={{
            top: `${popUpWindowFunction.distanceFromTop(props.popUpIndex)}vh`,
            left: `${popUpWindowFunction.distanceFromLeft(props.popUpIndex)}vh`
        }} >

        <div className="popUpHeader">Join a player to the advanture</div>

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
                onClick={openPopUpWindowHundler}
                variant="outlined"
                color="success"
            >Add Player</Button>
            <Button
                disabled={popUpWindowFunction.isButtonDisabled(popUpWindows.windows.length - 1, props.popUpIndex)}
                onClick={removeHighestIndexPopUp}
                variant="outlined"
                color="error"
            >Done</Button>
        </ButtonGroup>
    </div>)
}