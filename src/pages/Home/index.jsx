import React, { useState, useRef } from 'react'
import '@fontsource/playfair-display'
import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import TrendArtist from '../../components/mols/TrendArtist'
import { Col } from 'reactstrap'
import { AboutArea, LogoAboutArea, AreaCarrousel } from './styles'
import Carrousel from '../../components/organism/Carrousel'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
const Home = () => {
  const carrouselRef = useRef(null)
  const [nextPage, setNextPage] = useState(4)
  const [beforePage, setBeforePage] = useState(0)

  const handleNextPage = () => {
    setNextPage(nextPage + 3)
  }
  const handleBeforePage = () => {
    setBeforePage(nextPage - 1)
  }
  const data = [
    {
      title: 'Bambos a la playa',
      artPath:
        'https://thumbs.dreamstime.com/b/paisagem-da-praia-da-arte-do-vetor-79191064.jpg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Galaxy',
      artPath:
        'https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?b=1&k=20&m=1035676256&s=170667a&w=0&h=NOtiiFfDhhUhZgQ4wZmHPXxHvt3RFVD-lTmnWCeyIG4=',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Surf Ocean',
      artPath: 'https://miro.medium.com/max/1400/1*MqdN8ysLihK_lnp8JhEhaA.jpeg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Bambos a la plaiya',
      artPath:
        'https://thumbs.dreamstime.com/b/paisagem-da-praia-da-arte-do-vetor-79191064.jpg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Bambos a la plaiya',
      artPath:
        'https://thumbs.dreamstime.com/b/paisagem-da-praia-da-arte-do-vetor-79191064.jpg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Bambos a la plaiya',
      artPath:
        'https://thumbs.dreamstime.com/b/paisagem-da-praia-da-arte-do-vetor-79191064.jpg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
    {
      title: 'Bambos a la plaiya',
      artPath:
        'https://thumbs.dreamstime.com/b/paisagem-da-praia-da-arte-do-vetor-79191064.jpg',
      quantityAvailable: '20/100',
      description: 'bla bla bla bla bla bla açlskdjfçasldkjfçasldkfjasçldkfj',
    },
  ]
  return (
    <>
      <Header isMobile />
      <TrendArtist />
      <AreaCarrousel>
        {data.slice(beforePage, nextPage).map((item, key) => {
          const { title, artPath, quantityAvailable, description } = item
          return (
            <Carrousel
              title={title}
              artPath={artPath}
              quantityAvailable={quantityAvailable}
              carrouselRef={carrouselRef}
              key={key}
              description={description}
            />
          )
        })}
        <div>
          <MdNavigateNext onClick={handleNextPage} />
          <MdNavigateBefore onClick={handleBeforePage} />
        </div>
      </AreaCarrousel>

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
