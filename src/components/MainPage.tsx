import { Page } from '../models/Enums';
import { MainMenu } from '../components/mainMenu/MainMenu';
import { Header } from '../components/header/Header';
import { useContext, useState } from 'react';
import { PopUpHolder } from './PopUpHolder';
import { PageContext } from '../contextApi/generalContext';

export const MainPage = () => {


    const { page } = useContext(PageContext);

    const mainPages = {
        MainMenu: <MainMenu />,
        PopUp: <PopUpHolder />
    }

    return (<div className='MainPage'>
        <Header />
        {mainPages[page]}
    </div>)
}