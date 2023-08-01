import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useEffect } from 'react';
import { PageContext } from '../contextApi/generalContext';
import { UsersContext } from '../contextApi/userContext';
import axiosTool from '../utils/axiosTool';

export const MainPage = () => {

    const { setUsers } = useContext(UsersContext)
    const { page } = useContext(PageContext);

    

    useEffect(() => {

        const getUsers = async () => {
            let resp = await axiosTool.get("user/get-users")
            setUsers(resp.data)
        }
        getUsers()
        
    }, [setUsers])

    
    const mainPages = {
        MainMenu: <MainMenu />,

    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}