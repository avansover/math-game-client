import { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/AdduserWindow.css'

import { MainPage } from './components/MainPage';
import { PageContext, PopUpWindowType } from './contextApi/generalContext';
import { Page } from './models/Enums';
import { PopUpHolder } from './components/PopUpHolder';
import { PopUpContext } from './contextApi/generalContext';
import { User, UserContext, UsersListContext } from './contextApi/userContext';

function App() {

  const [page, setPage] = useState<Page>(Page.MAIN_MENU);
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindowType>({ isOpen: false, element: null });

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className="App">
      <PopUpContext.Provider value={{ popUpWindow, setPopUpWindow }}>
        <PageContext.Provider value={{ page, setPage }}>

          <UsersListContext.Provider value={{ users, setUsers }}>
            <UserContext.Provider value={{ user, setUser }}>

              <MainPage />
              {popUpWindow.isOpen && <PopUpHolder
                popUpWindow={popUpWindow}
              />}

            </UserContext.Provider>
          </UsersListContext.Provider>

        </PageContext.Provider>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
