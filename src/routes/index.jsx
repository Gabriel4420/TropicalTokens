//external and internal libs
import React from 'react'
import ReactToolTip from 'react-tooltip'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BsBrush } from 'react-icons/bs'
import { GrGallery } from 'react-icons/gr'

//pages
import Home from '../pages/Home'
import RegisterArt from '../pages/RegisterArt'
import MyArts from '../pages/MyArts'
import ArtDetails from '../pages/ArtDetails'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Admin from '../pages/Admin'
import Error404 from '../pages/Error'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Gallery from '../pages/Gallery'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import Container from '../components/template/Container'
import { UserProvider } from '../contexts/UserContext'
import FlashMessages from '../components/organism/FlashMessages'

//componentes
import MenuItem from '../components/organism/MenuItem'
import { Menu } from '../components/organism/MenuVertical'
import { PageBody } from '../components/template/PageBody'


const Routers = () => {
  return (
    <BrowserRouter>
      <Container>
        <UserProvider>
          <Header isMobile={true} />
          <FlashMessages />

          <Routes>
            <Route exact path="*" element={<Error404 />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/admin"
              element={
                <>
                  {' '}
                  <PageBody>
                    <Menu>
                      <MenuItem title="cadastrar artes" link="/registerArt">
                        <BsBrush color="white" />
                      </MenuItem>
                      <MenuItem title="minhas artes" link="/myarts">
                        <GrGallery color="white" />
                      </MenuItem>
                    </Menu>
                    <ReactToolTip id="tip-top" place="top" effect="solid" />
                    <ReactToolTip id="tip-right" place="right" effect="solid" />
                    <Admin />
                  </PageBody>
                </>
              }
            ></Route>
            <Route
              exact
              path="/registerArt"
              element={
                <>
                  {' '}
                  <PageBody>
                    <Menu>
                      <MenuItem title="cadastrar artes" link="/registerArt">
                        <BsBrush color="white" />
                      </MenuItem>
                      <MenuItem title="minhas artes" link="/myarts">
                        <GrGallery color="white" />
                      </MenuItem>
                    </Menu>
                    <ReactToolTip id="tip-top" place="top" effect="solid" />
                    <ReactToolTip id="tip-right" place="right" effect="solid" />
                    <RegisterArt />
                  </PageBody>
                </>
              }
            ></Route>
            <Route
              exact
              path="/myarts"
              element={
                <>
                  {' '}
                  <PageBody>
                    <Menu>
                      <MenuItem title="cadastrar artes" link="/registerArt">
                        <BsBrush color="white" />
                      </MenuItem>
                      <MenuItem title="minhas artes" link="/myarts">
                        <GrGallery color="white" />
                      </MenuItem>
                    </Menu>
                    <ReactToolTip id="tip-top" place="top" effect="solid" />
                    <ReactToolTip id="tip-right" place="right" effect="solid" />
                    <MyArts />
                  </PageBody>
                </>
              }
            ></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/art/:id" element={<ArtDetails/>}></Route>
          </Routes>
          <Footer />
        </UserProvider>
      </Container>
    </BrowserRouter>
  )
}

export default Routers
