import React, { useState, useRef, useEffect } from 'react'
import '@fontsource/playfair-display'
import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import TrendArtist from '../../components/mols/TrendArtist'
import { Col } from 'reactstrap'
import {
  AboutArea,
  LogoAboutArea,
  AreaCarrousel,
  CarrouselSection,
  TrendArtistArea,
} from './styles'
import Carrousel from '../../components/organism/Carrousel'
import Carousel from 'react-elastic-carousel'

const Home = () => {
  const carrouselRef = useRef(null)

  /*  */

  const [data, setData] = useState([])
  useEffect(() => {
    
    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ process.env.REACT_APP_TOKEN_API}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `query {
        allUsers {
          name,
          avatar {
            url
          }
        },
        allCarousels {
          title
          quantityavailable
          description
          art {
            url
          }
        }
      }`,
      }),
    })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const resp = respostaCompleta.data.allCarousels

        setData(resp)
      })
  }, [])
  return (
    <>
      <Header isMobile />
      <TrendArtistArea>
        <TrendArtist />
      </TrendArtistArea>
      <CarrouselSection>
        <div className="titleTrends">
          <h3>Trends</h3>
        </div>
        <AreaCarrousel>
          <Carousel
            breakPoints={[
              { width: 1, itemsToShow: 1 },
              { width: 550, itemsToShow: 2, itemsToScroll: 2 },
              { width: 768, itemsToShow: 3 },
              { width: 1129, itemsToShow: 2 },
              { width: 1200, itemsToShow: 4 },
            ]}
            enableTilt
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={1000}
            initialFirstItem={0}
            itemPadding={[10, 10]}
          >
            {data.map((item, key) => {
              const { title, art, quantityavailable, description } = item
              return (
                <Carrousel
                  title={title}
                  artPath={art.url}
                  quantityAvailable={quantityavailable}
                  carrouselRef={carrouselRef}
                  key={key}
                  description={description}
                />
              )
            })}
          </Carousel>
        </AreaCarrousel>
      </CarrouselSection>

      <AboutArea>
        <LogoAboutArea>
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
            Digital-tropicality is multiplicity, synergy and abundance. It's
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
      <Footer pos="home" />
    </>
  )
}

export default Home
