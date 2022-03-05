import React from 'react'
import '@fontsource/playfair-display'

import { ImGooglePlus3 } from 'react-icons/im'
import { BsFacebook } from 'react-icons/bs'

import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { Form, Container } from 'reactstrap'
import Footer from '../../components/template/footer'


import * as C from './styles'
import Button from '../../components/atoms/Button'

const Login = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
     
      <C.FormCentered>
        <C.LabelTitleLoginArea>
          <h1 className="text">Login</h1>
        </C.LabelTitleLoginArea>
        <Form style={{ marginTop: 61 }}>
          <C.Input
            id="email"
            name="email"
            placeholder="Type your Email"
            type="email"
          />

          <C.Input
            id="password"
            name="password"
            placeholder="Type your password"
            type="password"
          />
          <Button contentButton="Entrar" radial={10} to="/"></Button>
        </Form>

        <C.SocialArea>
          <Link className="text" to="/register">
            Create new account
          </Link>
          <h1>or</h1>
          <Button
            type="button"
            icon
            contentButton="Entrar com Google"
            radial={10}
            bgColor="#fa3d3d"
            width="30"
          >
            <ImGooglePlus3 size={30} color="white" />
          </Button>
          <Button
            className="adjustment"
            type="button"
            icon
            contentButton="Entrar com Facebook"
            width="30"
            radial={10}
            bgColor="#1f83cb"
          >
            <BsFacebook size={30} color="white" />
          </Button>
        </C.SocialArea>
      </C.FormCentered>
      <Footer />
    </Container>
  )
}

export default Login
