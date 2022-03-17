import React from 'react'
import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import * as C from './styles'

const Gallery = () => {
  return (
    <>
      <Header isMobile />
      <C.TitleArea>
        <h2>Trends</h2>
      </C.TitleArea>
      <Footer pos="home" />
    </>
  )
}

export default Gallery
