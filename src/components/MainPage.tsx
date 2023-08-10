import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useEffect } from 'react';
import { PageContext, PopUpContext } from '../contextApi/generalContext';
import { UsersListContext } from '../contextApi/userContext';
import axiosTool from '../utils/axiosTool';

export const MainPage = () => {

    const { setUsers } = useContext(UsersListContext)
    const { popUpWindow } = useContext(PopUpContext);
    const { page } = useContext(PageContext);

    

    useEffect(() => {

        const getUsers = async () => {
            let resp = await axiosTool.get("user/get-users")
            setUsers(resp.data)
        }
        getUsers()
        
    }, [setUsers, popUpWindow.userTriger ])

    
    const mainPages = {
        MainMenu: <MainMenu />,

    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}