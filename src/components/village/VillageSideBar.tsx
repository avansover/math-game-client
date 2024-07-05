import { useContext } from "react"
import { PlayerListContext } from "../../contextApi/userContext"
import { Button } from "@mui/material"
import { PopUpArrayContext, PopUpWindows } from "../../contextApi/generalContext"
import { JoinPlayerWindow } from "../popUps/JoinPlayerWindow"
import { PlayerSideBarCard } from "./PlayerSideBarCard"
import popUpWindowFunction from "../../utils/popUpWindowTool"

export const VillageSideBar = () => {

    const { popUpWindows, setPopUpWindows } = useContext(PopUpArrayContext);
    const { playerList } = useContext(PlayerListContext)

    const addPopUpWindowHundler = () => {

        let newPopUpArray = popUpWindowFunction.addPopUpWindow(popUpWindows, <JoinPlayerWindow
            popUpIndex={popUpWindows.windows.length} />);

        setPopUpWindows(newPopUpArray);
    }

    return (<div className="VillageSideBar">
        VillageSideBar

        <Button variant="outlined" onClick={() => addPopUpWindowHundler()}>Join a Player</Button>

        {playerList.filter((player) => player.isInGame === true).map((player, i) => {
            return (<PlayerSideBarCard key={i}
                player={player} />)
        })}

    </div>)
}