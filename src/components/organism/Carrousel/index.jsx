import React from 'react'
import * as c from './styles'
const Carrousel = ({ title, artPath, quantityAvailable,carrouselRef, description }) => {
  return (
    <c.Container>
      <c.CarrouselSlider ref={carrouselRef}>
        <c.ItemSlider>
          <c.ArtPhotoArea>
            <c.ArtPhoto src={artPath} alt="work of art" />
          </c.ArtPhotoArea>
          <c.TitleArea>
            <c.Title>{title}</c.Title>
          </c.TitleArea>
          <c.QuantityArtAvailableArea>
            <c.QuantityAvailable>
              Quantity Available: <span> {quantityAvailable}</span>
            </c.QuantityAvailable>
          </c.QuantityArtAvailableArea>
          <c.DescriptionArea>
            <c.Description>{description}</c.Description>
          </c.DescriptionArea>
        </c.ItemSlider>
      </c.CarrouselSlider>
    </c.Container>
  )
}

export default Carrousel
