//Internal & external libs

import React from 'react'
import { Container } from 'reactstrap'

//Components, Hooks, Utils and Contexts

import { Title } from '../../components/atoms/Texts'

//Begin Component

const Admin = () => {
  return (
    <Container>
      <Title>Bem vindo ao painel administrativo</Title>
      <Container>
        <p style={{ textAlign: 'center' }}>
          aqui você pode ver todas as suas artes em formato de grid
        </p>
      </Container>
    </Container>
  )
}

export default Admin
