import React, { FormEvent, useEffect, useState } from 'react';
import api from './services/api';
import UserForm from './components/UserForm';
import UserItem, { IUser } from './components/UserItem';

import './App.css';
import './Main.css';
import './Global.css';
import './Sidebar.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function listaAllUsers() {
      const response = await api.get('/users')
  
      setUsers(response.data)
    }
    listaAllUsers()
  },[users])


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar Usuario</strong>
        <UserForm />
      </aside>

      <main>
        <ul>
          {users.map((user: IUser) => {
            return <UserItem key={user._id} user={user} />
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
