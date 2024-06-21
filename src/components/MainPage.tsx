import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useEffect } from 'react';
import { PageContext, PopUpContext } from '../contextApi/generalContext';
import { Player, PlayerListContext } from '../contextApi/userContext';
import axiosTool from '../utils/axiosTool';
import { VillagePage } from './village/VillagePage';

export const MainPage = () => {


    const { setPlayerList } = useContext(PlayerListContext)
    const { popUpWindow } = useContext(PopUpContext);
    const { page } = useContext(PageContext);

    useEffect(() => {

        const getPlayers = async () => {
            try {
                let resp = await axiosTool.get("player/get_all_players");

                let dataBaseplayerList: Player[] = resp.data;

                let playerList = dataBaseplayerList.map(
                    (player) => ({
                        ...player,
                        isInGame: player.isInGame = false
                    })
                );
        
                setPlayerList(playerList);

            } catch (error) {
                console.log(error);
            }

        };

        getPlayers()

    }, [])

    //setPlayerList, popUpWindow.userTriger


    const mainPages = {
        MainMenu: <MainMenu />,
        Village: <VillagePage />
    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}