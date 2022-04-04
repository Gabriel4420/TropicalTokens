import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Gallery from '../pages/Gallery'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import Container from '../components/template/Container'
import { UserProvider } from '../contexts/UserContext'
import FlashMessages from '../components/organism/FlashMessages'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <BrowserRouter>
      <Container>
        <UserProvider>
          <Header isMobile={true} />
          <FlashMessages />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="*" element={<Error404 />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
          </Routes>
          <Footer />
        </UserProvider>
      </Container>
    </BrowserRouter>
  )
}

export default Routers
