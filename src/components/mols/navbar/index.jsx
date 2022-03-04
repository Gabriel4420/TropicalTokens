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

const Navbar = () => {
  const menu = [
    { titulo: 'Home', to: '/' },
    { titulo: 'Gallery', to: '/gallery' },
    { titulo: 'Users', to: '/users' },
    { titulo: 'About', to: '/about' },
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
            {menu.map((item, index) => (
              <NavLink key={index} to={item.to}>
                {item.titulo}
              </NavLink>
            ))}
          </NavMenu>
        ) : (
          <NavMenu>
            {menu.map((item, index) => (
              <NavLink key={index} to={item.to}>
                {item.titulo}
              </NavLink>
            ))}
          </NavMenu>
        )}

        <IconAreas>
          <NavLink to="/">
            <Person />
          </NavLink>
        </IconAreas>
      </Nav>
    </div>
  )
}

export default Navbar
