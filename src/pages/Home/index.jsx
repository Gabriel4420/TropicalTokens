import React from 'react'
import '@fontsource/playfair-display'
import Navbar from '../../components/mols/NavBar'
import Footer from '../../components/template/footer'
import TrendArtist from '../../components/mols/TrendArtist'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { AboutArea } from './styles'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss'
const Home = () => {
  return (
    <>
      <Navbar isMobile />
      <TrendArtist />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      <AboutArea>
        <div style={{ paddingRight: '50px' }}>
          <img
            src="/images/logo_nav.svg"
            alt="Logo"
            className="logo"
            style={{ width: 300 }}
          />
        </div>
        <Col>
          <h2>What is a tropical token?</h2>
          <p>
            Tropical Tokens is the backbone of content development between
            creators, digitality, and supporters of all kinds.
            Digital-tropicality is multiplicity, synergy and abundance. It’s
            feasibility.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tropicaltokens.com/#start"
          >
            know more
          </a>
        </Col>
      </AboutArea>
      <Footer />
    </>
  )
}

export default Home
