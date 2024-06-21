import { useContext } from "react"
import { PlayerListContext } from "../../contextApi/userContext"
import { Button } from "@mui/material"
import { PopUpContext } from "../../contextApi/generalContext"
import { JoinPlayerWindow } from "./JoinPlayerWindow"
import { PlayerSideBarCard } from "./PlayerSideBarCard"

export const VillageSideBar = () => {

    const { setPopUpWindow } = useContext(PopUpContext);
    const { playerList } = useContext(PlayerListContext)


    return (<div className="VillageSideBar">
        VillageSideBar

        <Button variant="outlined" onClick={() => setPopUpWindow({ isOpen: true, element: <JoinPlayerWindow /> })}>Join a Player</Button>

        {playerList.filter((player) => player.isInGame === true).map((player, i) => {
            return (<PlayerSideBarCard key={i}
                player={player} />)
        })}

    </div>)
}