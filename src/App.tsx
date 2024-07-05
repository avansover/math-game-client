import { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'
import './css/JoinPlayerWindow.css'
import './css/AddPlayerWindow.css'
import './css/VillagePage.css'

import { MainPage } from './components/MainPage';
import { PageContext, PopUpArrayContext, PopUpWindows, PopUpWindowType } from './contextApi/generalContext';
import { Page } from './models/Enums';


import { Player, PlayerListContext, User, UserContext, UsersListContext } from './contextApi/userContext';
import { PopUpArrayHolder } from './components/PopUpsHolder';

function App() {

  const [page, setPage] = useState<Page>(Page.VILLAGE);

  const [popUpWindows, setPopUpWindows] = useState<PopUpWindows>({ windows: [] })

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const [playerList, setPlayerList] = useState<Player[]>([])
  const [playerListTriger, setPlayerListTriger] = useState<boolean>(false)

  return (
    <div className="App">
      <PopUpArrayContext.Provider value={{ popUpWindows, setPopUpWindows }}>
        <PageContext.Provider value={{ page, setPage }}>

          <PlayerListContext.Provider value={{ playerList, setPlayerList, playerListTriger, setPlayerListTriger }}>
            <UsersListContext.Provider value={{ users, setUsers }}>
              <UserContext.Provider value={{ user, setUser }}>

                <MainPage />
                
                {popUpWindows.windows.length > 0 && <PopUpArrayHolder
                  popUpWindows={popUpWindows}
                />}

              </UserContext.Provider>
            </UsersListContext.Provider>
          </PlayerListContext.Provider>

        </PageContext.Provider>
      </PopUpArrayContext.Provider>
    </div>
  );
}

export default App;
