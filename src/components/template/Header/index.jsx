import React, { useState } from 'react'
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
  NavMenuAvatar,
} from './styles.js'



const Header = () => {

  

  const menu = [
    { titulo: 'Home', to: '/', type: 'NavLink' },
    { titulo: 'Gallery', to: '/gallery', type: 'NavLink' },
    { titulo: 'Users', to: '/users', type: 'NavLink' },
    { titulo: 'About', to: 'https://tropicaltokens.com/#mission', type: 'a' },
  ]

  const menuAvatar = [
    { titulo: 'Logout', to: '/', type: 'NavLink' },
    { titulo: 'Admin', to: '/admin', type: 'NavLink', isAdmin: true },
    { titulo: 'Meus Dados', to: '/', type: 'NavLink' },
  ]

  const [isMobile, setIsMobile] = useState(false)
  const [isAvatar, setIsAvatar] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsMobile(true)
    isActive === false ? setIsActive(true) : setIsActive(false)
  }

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
          <NavLink to="/login">
            <Login className="login" />
            <p className="login-text">login</p>
          </NavLink>
          <Person className="person" />
          {
            <NavMenuAvatar>
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
                ) : (
                  <NavLink key={key} to={item.to}>
                    {item.titulo}
                  </NavLink>
                ),
              )}
            </NavMenuAvatar>
          }
        </IconAreas>
      </Nav>
    </div>
  )
}

export default Header
