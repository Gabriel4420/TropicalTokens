//Internal & External libs

import React, { useState, useRef, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'

//Fonts externals and internals

import '@fontsource/playfair-display'

//Components, Hooks, Utils and Contexts

import api from '../../utils/api'
import TrendArtist from '../../components/mols/TrendArtist'
import Carrousel from '../../components/organism/Carrousel'

//Internal Styles

import {
  AboutArea,
  LogoAboutArea,
  AreaCarrousel,
  CarrouselSection,
  TrendArtistArea,
} from './styles'

//Begin Component

const Home = () => {
  //Refs

  const carrouselRef = useRef(null)

  // States

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
            initialFirstItem={3}
            itemPadding={[10, 10]}
          >
            {data.map((item, key) => {
              const { title, image, quantityavailable, description } = item

              return (
                <Link to={`art/${item._id}`}>
                  <Carrousel
                    title={title}
                    artPath={image ? `${image}` : '/images/leo.png'}
                    quantityAvailable={quantityavailable}
                    carrouselRef={carrouselRef}
                    key={key}
                    description={description}
                  />
                </Link>
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
          <h2>What is Tropical Token?</h2>
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
    </>
  )
}

export default Home
