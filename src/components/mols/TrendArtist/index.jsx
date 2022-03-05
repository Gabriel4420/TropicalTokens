import React from 'react'

/* Custom style*/
import '@fontsource/playfair-display'
import {
  Header,
  TrendNft,
  TrendNftArea,
  TrendArtistContainer,
  TicketArtistArea,
  TicketLeilaoArea,
  ButtonArtwork,
} from './styles.js'
import TicketArtistName from '../TicketArtistName/index.jsx'

const TrendArtist = () => {
  return (
    <TrendArtistContainer>
      <div className="TitleArt">
        <h2>Arte XYZ</h2>
      </div>
      <Header>
        <TrendNftArea>
          <TrendNft src="/images/art.png" />
        </TrendNftArea>
        <TicketArtistArea>
          <TicketArtistName titleArtist="@leo" createBy="Create By" />
        </TicketArtistArea>
        <TicketLeilaoArea>
          <h3>auction ends</h3>
          <ButtonArtwork>View Artwork</ButtonArtwork>
        </TicketLeilaoArea>
      </Header>
    </TrendArtistContainer>
  )
}

export default TrendArtist
