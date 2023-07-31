import { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/AdduserWindow.css'

import { MainPage } from './components/MainPage';
import { PageContext, PopUpWindowType } from './contextApi/generalContext';
import { Page } from './models/Enums';
import { PopUpHolder } from './components/PopUpHolder';
import { PopUpContext } from './contextApi/generalContext';

function App() {

  const [page, setPage] = useState<Page>(Page.MAIN_MENU);
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindowType>({ isOpen: false, element: null });

  return (
    <div className="App">
      <PopUpContext.Provider value={{
        popUpWindow,
        setPopUpWindow
      }}>
        <PageContext.Provider value={{ page, setPage }}>
          <MainPage />
          {popUpWindow.isOpen && <PopUpHolder
            popUpWindow={popUpWindow}
          />}
        </PageContext.Provider>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
