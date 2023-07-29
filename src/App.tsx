import React, { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/AdduserWindow.css'

import { MainPage } from './components/MainPage';
import { PageContext } from './contextApi/generalContext';
import { Page } from './models/Enums';
import { PopUpHolder } from './components/PopUpHolder';
import { PopUpContext } from './contextApi/generalContext';

function App() {

  const [page, setPage] = useState<Page>(Page.MAIN_MENU);
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <PopUpContext.Provider value={{ isPopUpOpen, setIsPopUpOpen }}>
        <PageContext.Provider value={{ page, setPage }}>
          <MainPage />
          <PopUpHolder />
        </PageContext.Provider>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
