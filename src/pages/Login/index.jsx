//Fonts
import '@fontsource/playfair-display'

//Bootstrap dist

import 'bootstrap/dist/css/bootstrap.css'

//Internal & external libs

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Container } from 'reactstrap'

//Intern Styles

import * as C from './styles'

//Components, Hooks, Utils and Contexts
import { Context } from '../../contexts/UserContext'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

//Begin Component

const Login = () => {
  //States

  const [user, setUser] = useState({})
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
  }
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <C.FormCentered>
        <C.LabelTitleLoginArea>
          <h1 className="text">Login</h1>
        </C.LabelTitleLoginArea>
        <Form onSubmit={handleSubmit} style={{ marginTop: 61 }}>
          <Input
            id="email"
            mode="light-radius"
            name="email"
            placeholder="Type your Email"
            type="email"
            handleOnChange={handleChange}
          />

          <Input
            id="password"
            name="password"
            placeholder="Type your password"
            type="password"
            handleOnChange={handleChange}
          />
          <Button
            width="50"
            type="submit"
            contentButton="Entrar"
            radial={10}
            to="/"
          />
        </Form>

        <C.SocialArea>
          <Link className="text" to="/register">
            Create new account
          </Link>
        </C.SocialArea>
      </C.FormCentered>
    </Container>
  )
}

export default Login
