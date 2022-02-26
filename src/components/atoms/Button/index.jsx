import React, { useState } from 'react'
import { Container } from './styles'

const Button = ({ contentButton, radial, icon=true, bgColor, props }) => {
  const [hasIcon, setHasIcon] = useState(false)

  const handleIcon = () => {
    setHasIcon(true)
  }

  return (
    <Container
      icon={icon && handleIcon}
      borderRadius={radial}
      contentButton={contentButton}
      background={bgColor}>
    
      {hasIcon && props.children}
      {contentButton}
    </Container>
  )
}

export default Button
