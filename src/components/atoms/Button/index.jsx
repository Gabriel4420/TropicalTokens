import React, { useState } from 'react'
import { Container } from './styles'

const Button = ({ contentButton, radial, icon, bgColor, children }) => {
  const [hasIcon, setHasIcon] = useState(false)

  const handleIcon = () => {
    setHasIcon(true)
  }

  return (
    <Container
      icon={icon && handleIcon}
      borderRadius={radial}
      contentButton={contentButton}
      background={bgColor}
    >
      {hasIcon && children}
      {contentButton}
    </Container>
  )
}

export default Button
