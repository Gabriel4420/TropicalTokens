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
} from './styles.js'

const Header = () => {
  const menu = [
    { titulo: 'Home', to: '/', type: 'NavLink' },
    { titulo: 'Gallery', to: '/gallery', type: 'NavLink' },
    { titulo: 'Users', to: '/users', type: 'NavLink' },
    { titulo: 'About', to: 'https://tropicaltokens.com/#mission', type: 'a' },
  ]

  const [isMobile, setIsMobile] = useState(false)
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
          <NavLink to="/">
            <Person className='person' />
          </NavLink>
        </IconAreas>
      </Nav>
    </div>
  )
}

export default Header
