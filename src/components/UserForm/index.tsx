import React, { FormEvent, useState } from 'react'
import api from '../../services/api'
import './styles.css'

const UserForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function handleSubmit (e:FormEvent) {
    e.preventDefault()

    api.post('user', {
      name,
      email,
      cpf,
      phone,
      zipcode,
      street,
      district,
      city,
      state,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="name1">Nome</label>
        <input 
          name="name1"
          id="name1"
          required
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="email">E-mail</label>
        <input 
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="cpf">CPF</label>
        <input 
          name="cpf"
          id="cpf"
          required
          value={cpf}
          onChange={(e) => {setCpf(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="phone">Telefone</label>
        <input 
          name="phone"
          id="phone"
          required
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="cep">CEP</label>
        <input 
          name="cep"
          id="cep"
          required
          value={zipcode}
          onChange={(e) => {setZipcode(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="street">Rua</label>
        <input 
          name="street"
          id="street"
          required
          value={street}
          onChange={(e) => {setStreet(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="district">Bairro</label>
        <input 
          name="district"
          id="district"
          required
          value={district}
          onChange={(e) => {setDistrict(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="city">Cidade</label>
        <input 
          name="city"
          id="city"
          required
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>
      <div className="input-block">
        <label htmlFor="state">Estado</label>
        <input 
          name="state"
          id="state"
          required
          value={state}
          onChange={(e) => {setState(e.target.value)}}
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default UserForm