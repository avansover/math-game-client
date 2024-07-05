import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { PopUpArrayContext } from "../../contextApi/generalContext";
import popUpWindowFunction from "../../utils/popUpWindowTool";
import axiosTool from "../../utils/axiosTool";
import { Player, PlayerListContext } from "../../contextApi/userContext";

export const DeletePlayerWindow = (props: { popUpIndex: number, player: Player }) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);
    const { playerListTriger, setPlayerListTriger } = useContext(PlayerListContext)

  

    const removeHighestIndexPopUp = () => {

        var newPopUpArray = popUpWindowFunction.removePopUpWindow(popUpWindows);
        setPopUpWindows(newPopUpArray);
    }


    const deletePlayer = async () => {
        try {
            let resp = await axiosTool.delete(`player/delete_player?playerId=${props.player._id}`)
            console.log(resp);
            setPlayerListTriger(!playerListTriger)

        } catch (error) {
            console.log(error);
        }
    }

    return (<div className="AddPlayerWindow" style={{
        position: "relative",
        top: `${popUpWindowFunction.distanceFromTop(props.popUpIndex)}vh`,
        left: `${popUpWindowFunction.distanceFromLeft(props.popUpIndex)}vh`
    }}>

        <div className="popUpHeader">Delete Player</div>

        <div className="popUpHeader">Are you sure you want to delete {props.player.name}</div>

        <Button
            onClick={deletePlayer}
            variant="outlined"
            color="error"
        >delete</Button>
        <Button
            onClick={removeHighestIndexPopUp}
            variant="outlined"
            color="error"
        >Close</Button>

    </div>)
}