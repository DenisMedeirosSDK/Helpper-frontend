import React from 'react'
import api from '../../services/api'

import './styles.css'

export interface IUser {
  _id:string;
  name:string;
  email:string;
  cpf:string;
  phone:string;
  zipcode:string;
  street:string;
  district:string;
  city:string;
  state:string;
}

interface IUserProps {
  user: IUser;
}

const UserItem: React.FC<IUserProps> = ({ user }) => {
  function handleDeleteUser(id:String):void {
    api.delete(`user/${user._id}`).then(response => response.data)
  }
  return(
    <li className="user-item">
      <header>
        <div className="user-info">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
          <p>CPF: {user.cpf}</p>
          <p>Telefone: {user.phone}</p>
        </div>
      </header>
      <p>CEP: {user.zipcode}</p>
      <p>Rua: {user.street}</p>
      <p>Cidade: {user.city}</p>
      <p>Estado: {user.state}</p>

      <button onClick={() => handleDeleteUser(user._id)}>Deletar</button>
    </li>
  )
}

export default UserItem