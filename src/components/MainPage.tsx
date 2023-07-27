import { Page } from '../models/Enums';
import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useState } from 'react';

export const MainPage = () => {

    const [page, setPage] = useState<Page>(Page.MAIN_MENU)

    const mainPages = {
        MainMenu: <MainMenu />
    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}