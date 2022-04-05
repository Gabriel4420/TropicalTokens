import React from 'react'
import ReactToolTip from 'react-tooltip'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
import { PageBody } from '../components/template/PageBody'
import Container from '../components/template/Container'
import { UserProvider } from '../contexts/UserContext'
import FlashMessages from '../components/organism/FlashMessages'
import Admin from '../pages/Admin'

const RouterAdmin = () => {
  return (
    <BrowserRouter>
      <Container>
        <UserProvider>
          <Header isMobile={true} />
          <FlashMessages />
          
          <PageBody>
            <Routes>
              <Route exact path="/admin" element={<Admin />}></Route>
            </Routes>
          </PageBody>
          <Footer />
        </UserProvider>
        <ReactToolTip id="tip-top" place="top" effect="solid" />
        <ReactToolTip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  )
}

export default RouterAdmin
