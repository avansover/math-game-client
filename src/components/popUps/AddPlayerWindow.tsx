import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { PopUpArrayContext } from "../../contextApi/generalContext";
import popUpWindowFunction from "../../utils/popUpWindowTool";
import axiosTool from "../../utils/axiosTool";
import { PlayerListContext } from "../../contextApi/userContext";

export const AddPlayerWindow = (props: { popUpIndex: number }) => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);
    const { playerListTriger, setPlayerListTriger } = useContext(PlayerListContext)

    const [playerName, setPlayerName] = useState<String>("")

    const removeHighestIndexPopUp = () => {

        var newPopUpArray = popUpWindowFunction.removePopUpWindow(popUpWindows);
        setPopUpWindows(newPopUpArray);
    }


    const createPlayer = async () => {
        try {
            let resp = await axiosTool.post("player/add_player", { name: playerName })
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

        <div className="popUpHeader">Add a new player</div>

        <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayerName(e.target.value)}
            id="outlined-basic" label="Player Name"
            variant="outlined"
        />

        <Button
            onClick={createPlayer}
            variant="outlined"
            color="success"
        >Add Player</Button>
        <Button
            onClick={removeHighestIndexPopUp}
            variant="outlined"
            color="error"
        >Close</Button>

    </div>)
}