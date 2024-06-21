import { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/JoinPlayerWindow.css'
import './css/AdduserWindow.css'
import './css/VillagePage.css'

import { MainPage } from './components/MainPage';
import { PageContext, PopUpWindowType } from './contextApi/generalContext';
import { Page } from './models/Enums';
import { PopUpHolder } from './components/PopUpHolder';
import { PopUpContext } from './contextApi/generalContext';
import { Player, PlayerListContext, User, UserContext, UsersListContext } from './contextApi/userContext';

function App() {

  const [page, setPage] = useState<Page>(Page.VILLAGE);
  const [popUpWindow, setPopUpWindow] = useState<PopUpWindowType>({ isOpen: false, element: null, userTriger: false });

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const [playerList, setPlayerList] = useState<Player[]>([])

  return (
    <div className="App">
      <PopUpContext.Provider value={{ popUpWindow, setPopUpWindow }}>
        <PageContext.Provider value={{ page, setPage }}>

          <PlayerListContext.Provider value={{ playerList, setPlayerList }}>
            <UsersListContext.Provider value={{ users, setUsers }}>
              <UserContext.Provider value={{ user, setUser }}>

                <MainPage />
                {popUpWindow.isOpen && <PopUpHolder
                  popUpWindow={popUpWindow}
                />}

              </UserContext.Provider>
            </UsersListContext.Provider>
          </PlayerListContext.Provider>

        </PageContext.Provider>
      </PopUpContext.Provider>
    </div>
  );
}

export default App;
