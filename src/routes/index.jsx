import React from 'react'
import ReactToolTip from 'react-tooltip'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import Profile from '../pages/Profile'
import Admin from '../pages/Admin'
import { FiUser } from 'react-icons/fi'
import { BsBrush } from 'react-icons/bs'
import MenuItem from '../components/organism/MenuItem'
import { Menu } from '../components/organism/MenuVertical'

const Routers = () => {
  return (
    <BrowserRouter>
      <Container>
        <UserProvider>
          <Header isMobile={true} />
          {window.location.pathname === '/admin' && (
            <Menu>
              <MenuItem title="arts" link="/myarts">
                <BsBrush color="white" />
              </MenuItem>
              <MenuItem title="users" link="/users">
                <FiUser color="white" />
              </MenuItem>
            </Menu>
          )}
          <FlashMessages />
          
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="*" element={<Error404 />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
          </Routes>
          <Footer />
        </UserProvider>
        <ReactToolTip id="tip-top" place="top" effect="solid" />
        <ReactToolTip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  )
}

export default Routers
