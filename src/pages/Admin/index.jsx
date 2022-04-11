import React from 'react'
import { Container } from 'reactstrap'
import { Title } from '../../components/atoms/Texts'

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
