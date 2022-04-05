import React from 'react'
import { useNavigate, useLocation } from 'react-router'

import { Container } from './styles'
const MenuItem = ({ link, title, children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let isActive = location.pathname === link

  const handleLinkClick = (e) => {
    e.preventDefault()
    navigate(link)
  }
  return (
    <Container
    
      data-tip={title}
      data-for="tip-right"
      active={isActive}
      href={link}
      onClick={handleLinkClick}
    >
      {children}
    </Container>
  )
}

export default MenuItem
