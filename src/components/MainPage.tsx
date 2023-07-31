import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../contextApi/generalContext';
import axios from 'axios';

export const MainPage = () => {


    useEffect(() => {
        getUsers()

    }, [])

    const { page } = useContext(PageContext);

    const getUsers = async () => {
        let resp = await axios.get("http://localhost:5000/api/user/get-users");
        console.log(resp);
    }

    const mainPages = {
        MainMenu: <MainMenu />,

    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}