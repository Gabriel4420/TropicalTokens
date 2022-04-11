import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import { Title } from '../../components/atoms/Texts'
import { Container } from 'reactstrap'
import RoundedImage from '../../components/atoms/RoundedImage'
import * as C from './styles'

const Gallery = () => {
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
              >
                <RoundedImage src={image}></RoundedImage>
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
