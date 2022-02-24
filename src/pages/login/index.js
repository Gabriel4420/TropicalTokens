import React from 'react'
import '@fontsource/playfair-display'

import { ImGooglePlus3 } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { BsFacebook } from 'react-icons/bs'

import 'bootstrap/dist/css/bootstrap.css'

import { Form, Container } from 'reactstrap'
import Footer from '../../components/template/footer'
import Navbar from "../../components/mols/navbar/"

import * as C from './styles'

const Login = () => {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <C.FormCentered>
        <div style={{ marginTop: 120 }}>
          <h1 className="text">Login</h1>
        </div>
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
          <C.ButtonEnter>Enter</C.ButtonEnter>
        </Form>

        <C.SocialArea>
          <h1 className="text">Create new account</h1>
          <h1 className="text">or</h1>
          <IconContext.Provider value={{ size: '69.73px' }}>
            <div className="ButtonSocialCenter">
              <C.FacebookSocialButton>
                <BsFacebook size={60} color="white" className="adjustment" />
                <span>Login with Facebook</span>
              </C.FacebookSocialButton>
              <C.GoogleSocialButton>
                <ImGooglePlus3 size={60} color="white" className="adjustment" />
                <span>Login with Google</span>
              </C.GoogleSocialButton>
            </div>
          </IconContext.Provider>
        </C.SocialArea>
      </C.FormCentered>
      <Footer />
    </Container>
  )
}

export default Login
