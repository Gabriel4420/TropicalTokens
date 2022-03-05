import React, { useState } from 'react'
import { Container } from './styles'

const Button = (props) => {
  return (
    <>
      <Container
        icon={props.icon}
        borderRadius={props.radial}
        contentButton={props.contentButton}
        background={props.bgColor}
        width={props.width}
      >
        {props.icon == true && props.children}
        <span className="adjustment"></span> {props.contentButton}
      </Container>
    </>
  )
}

export default Button
