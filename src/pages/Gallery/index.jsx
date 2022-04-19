//Internal e External libs

import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

//Components, Hooks, Utils and Contexts

import api from '../../utils/api'
import { Title } from '../../components/atoms/Texts'

//Internal Styles

import * as C from './styles'

//Begin Component

const Gallery = () => {
  //States

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await api.get('/arts').then((response) => {
        setData(response.data.arts)
      })
    }
    fetchData()
  }, [data])
  return (
    <>
      <Title>Trends</Title>
      <Container>
        <C.ArtsArea>
          {data.map((item, index) => {
            const { title, image } = item
            return (
              <Container
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                key={index}
              >
                <img src={image} width="300" height="220" alt={title}></img>
                <span>{title}</span>
              </Container>
            )
          })}
        </C.ArtsArea>
      </Container>
    </>
  )
}

export default Gallery
