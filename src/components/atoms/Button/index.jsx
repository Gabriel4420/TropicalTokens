import React, { useState } from 'react'
import { Container } from './styles'

const Button = (props) => {
  const [hasIcon, setHasIcon] = useState(false)

  const handleIcon = () => {
    setHasIcon(true)
  }

  return (
    <>
      <Container
        icon={props.icon && handleIcon}
        borderRadius={props.radial}
        contentButton={props.contentButton}
        background={props.bgColor}
      >
        {hasIcon && <div>{props.children}</div>}
        {props.contentButton}
      </Container>
    </>
  )
}

export default Button
