import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75vw;
`

export const CarrouselSlider = styled.div`
  display: flex;
  width: 100%;
`

export const ItemSlider = styled.div`
  background-color: white;
 
  
  width: 280px;
  border-radius: 16px;
  flex: none;
`

export const ArtPhotoArea = styled.div``

export const ArtPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  font-weight: bold;
  font-family: 'sans-serif';
  font-size: 30px;
`

export const QuantityArtAvailableArea = styled.div`
  span {
    font-weight: bold;
  }
`

export const QuantityAvailable = styled.p`
  font-size: 15px;
`

export const DescriptionArea = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Description = styled.p`
  font-size: 18px;
`
