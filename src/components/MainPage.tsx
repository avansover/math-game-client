import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useEffect } from 'react';
import { PageContext } from '../contextApi/generalContext';
import { Player, PlayerListContext } from '../contextApi/userContext';
import axiosTool from '../utils/axiosTool';
import { VillagePage } from './village/VillagePage';
import { ObjectId } from 'mongodb';

export const MainPage = () => {

    const { playerList, setPlayerList, playerListTriger } = useContext(PlayerListContext)
    const { page } = useContext(PageContext);

    useEffect(() => {

        const getPlayers = async () => {
            try {
                let resp = await axiosTool.get("player/get_all_players");

                let dataBasePlayerList: Player[] = resp.data.data;

                let playerList = dataBasePlayerList.map(
                    (player) => ({
                        ...player,
                        isInGame: player.isInGame = checkIfPlayerIsAlreadyInGame(player._id)
                    })
                );

                setPlayerList(playerList);

            } catch (error) {
                console.log(error);
            }

        };

        getPlayers()

    }, [playerListTriger])

    const checkIfPlayerIsAlreadyInGame = (playerId: ObjectId): boolean => {

        var player = playerList.find(player => player._id === playerId);

        if (player !== undefined) {
            return player.isInGame;
        }

        return false
    }

    const mainPages = {
        MainMenu: <MainMenu />,
        Village: <VillagePage />
    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}