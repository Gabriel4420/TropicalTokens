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
    const fetchData = async () => {
      await api.get('arts/').then((response) => {
        setData(response.data.arts)
      })
    }

    fetchData()
  }, [])

  return (
    <TrendArtistContainer>
      {data
        .filter((item) => item.title === 'Galaxia')
        .map((item, key) => {
          const { title, image, user } = item
          return (
            <div key={key}>
              <div className="TitleArt">
                <h2>{title}</h2>
              </div>
              <Header>
                <TrendNftArea>
                  {image ? (
                    <TrendNft src={`${image}`} />
                  ) : (
                    <TrendNft src={`/images/leo.png`} />
                  )}
                </TrendNftArea>
                <TicketArtistArea>
                  <TicketArtistName
                    titleArtist={`@${user.name}`}
                    createBy="Create By"
                    titleArt={title}
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
