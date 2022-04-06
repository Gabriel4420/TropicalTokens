import React, { useState, useContext } from 'react'

import '@fontsource/playfair-display'
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  Person,
  IconAreas,
  Login,
} from './styles.js'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import { Context } from '../../../contexts/UserContext'
const Header = () => {
  const { authenticated, logout } = useContext(Context)
  const menu = [
    { titulo: 'Home', to: '/', type: 'NavLink' },
    { titulo: 'Gallery', to: '/gallery', type: 'NavLink' },
    { titulo: 'Users', to: '/users', type: 'NavLink' },
    { titulo: 'About', to: 'https://tropicaltokens.com/#mission', type: 'a' },
  ]

  const menuAvatar = [
    {
      titulo: 'Logout',
      to: logout,
      type: 'Button',
    },
    { titulo: 'Admin', to: '/admin', type: 'NavLink', isAdmin: true },
    { titulo: 'Meus Dados', to: '/profile', type: 'NavLink' },
  ]

  const [isMobile, setIsMobile] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsMobile(true)
    isActive === false ? setIsActive(true) : setIsActive(false)
  }

  const [open, setOpen] = useState(false)

  return (
    <div style={{ padding: 20 }}>
      <Nav>
        <div className="NavLogoArea">
          <NavLogo src="/images/logo_tropical.png" />
        </div>
        <Bars onClick={handleActive} />

        {isMobile ? (
          <NavMenu active={isActive}>
            {menu.map((item, key) =>
              item.type === 'a' ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                  href={item.to}
                  className="link"
                >
                  {item.titulo}
                </a>
              ) : (
                <NavLink key={key} to={item.to}>
                  {item.titulo}
                </NavLink>
              ),
            )}
          </NavMenu>
        ) : (
          <NavMenu>
            {menu.map((item, key) =>
              item.type === 'a' ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                  href={item.to}
                  className="link"
                >
                  {item.titulo}
                </a>
              ) : (
                <NavLink key={key} to={item.to}>
                  {item.titulo}
                </NavLink>
              ),
            )}
          </NavMenu>
        )}

        <IconAreas>
          {authenticated ? (
            <>
              {' '}
              <Person onClick={() => setOpen(true)} className="person" />
              <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalHeader
                  close={
                    <Button
                      color="danger"
                      outline
                      onClick={() => setOpen(false)}
                    >
                      ×
                    </Button>
                  }
                >
                  escolha uma opção
                </ModalHeader>
                <ModalBody>
                  {menuAvatar.map((item, key) =>
                    item.type === 'a' ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key}
                        href={item.to}
                        className="link"
                      >
                        {item.titulo}
                      </a>
                    ) : item.type === 'NavLink' ? (
                      <NavLink key={key} to={item.to}>
                        {item.titulo}
                      </NavLink>
                    ) : (
                      <Button key={key} onClick={item.to}>
                        {item.titulo}
                      </Button>
                    ),
                  )}
                </ModalBody>
              </Modal>
            </>
          ) : (
            <NavLink to="/login">
              <Login className="login" />
              <p className="login-text">login</p>
            </NavLink>
          )}
        </IconAreas>
      </Nav>
    </div>
  )
}

export default Header
