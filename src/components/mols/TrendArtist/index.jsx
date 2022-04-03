import React, { useState, useEffect } from 'react'
import api from '../../../utils/api'

import '@fontsource/playfair-display'

import {
  Header,
  TrendNft,
  TrendNftArea,
  TrendArtistContainer,
  TicketArtistArea,
} from './styles.js'

import TicketArtistName from '../TicketArtistName/index.jsx'

const TrendArtist = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      await api.get('/arts/').then((response) => {
        setData(response.data.arts)
      })
    })()
  }, [data])

  return (
    <TrendArtistContainer>
      {data.map((item, key) => {
        const { title, images, user } = item
        return (
          <div key={key}>
            {' '}
            <div className="TitleArt">
              <h2>{title}</h2>
            </div>
            <Header>
              <TrendNftArea>
                <TrendNft
                  src={`${process.env.REACT_APP_API}/images/arts/${images[key]}`}
                />
              </TrendNftArea>
              <TicketArtistArea>
                <TicketArtistName
                  titleArtist={`@${user.name}`}
                  createBy="Create By"
                />
              </TicketArtistArea>
            </Header>
          </div>
        )
      })}
    </TrendArtistContainer>
  )
}

export default TrendArtist
