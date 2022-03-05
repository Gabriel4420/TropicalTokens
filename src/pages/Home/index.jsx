import React from 'react'
import '@fontsource/playfair-display'
import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import TrendArtist from '../../components/mols/TrendArtist'
import { Col } from 'reactstrap'
import { AboutArea, LogoAboutArea } from './styles'

const Home = () => {
  return (
    <>
      <Header isMobile />
      <TrendArtist />
      
      <AboutArea>
        <LogoAboutArea >
          <img
            src="/images/logo_nav.svg"
            alt="Logo"
            className="logo"
            style={{ width: 300 }}
          />
        </LogoAboutArea>
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
