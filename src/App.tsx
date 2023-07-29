import React, { useState } from 'react';
import './App.css';
import './css/UserMamagement.css'

import { MainPage } from './components/MainPage';
import { User, UserContext } from './contextApi/userContext';

function App() {

  const [user, setUser] = useState<User | null>(null)
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>


        <MainPage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
