import { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/AdduserWindow.css'

import { MainPage } from './components/MainPage';
import { PageContext, PopUpWindowType } from './contextApi/generalContext';
import { Page } from './models/Enums';
import { PopUpHolder } from './components/PopUpHolder';
import { PopUpContext } from './contextApi/generalContext';
import { User, UsersContext } from './contextApi/userContext';

function App() {

  const [page, setPage] = useState<Page>(Page.MAIN_MENU);
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindowType>({ isOpen: false, element: null });

  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="App">
      <PopUpContext.Provider value={{ popUpWindow, setPopUpWindow }}>
        <PageContext.Provider value={{ page, setPage }}>

          <UsersContext.Provider value={{ users, setUsers }}>
            <MainPage />
            {popUpWindow.isOpen && <PopUpHolder
              popUpWindow={popUpWindow}
            />}
          </UsersContext.Provider>

        </PageContext.Provider>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
