import { useState, useContext } from 'react'
import Input from '../../components/atoms/Input'
import { Link } from 'react-router-dom'
import { Title } from '../../components/atoms/Texts'

/* contexts */
import { Context } from '../../contexts/UserContext'
import { Container } from 'reactstrap'

function Register() {
  const [user, setUser] = useState({})
  const { register } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    register(user)
  }

  return (
    <Container>
      <Title>Registrar</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          type="text"
          name="wallet"
          placeholder="Digite sua Wallet"
          handleOnChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          type="email"
          name="confirmemail"
          placeholder="Confirme seu email"
          handleOnChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          
          type="password"
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </Container>
  )
}

export default Register
