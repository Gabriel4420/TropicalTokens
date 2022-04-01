import React, { useState, useContext } from 'react'
import '@fontsource/playfair-display'

import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { Form, Container } from 'reactstrap'
import Footer from '../../components/template/Footer'
import { Context } from '../../contexts/UserContext'
import * as C from './styles'

import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'

const Login = () => {
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
