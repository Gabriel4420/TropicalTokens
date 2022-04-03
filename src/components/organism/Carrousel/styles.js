import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CarrouselSlider = styled.div`
  display: flex;
  width: 100%;
`

export const ItemSlider = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`

export const ArtPhotoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ArtPhoto = styled.img`
  width: 100%;
  max-width: 500px;
  height: 50vh;
  object-fit: cover;
`

export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  text-align: center;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: 'sans-serif';
  font-size: 30px;
  text-align: center;
  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 20px;
  }
`

export const QuantityArtAvailableArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    font-weight: bold;
  }
`

export const QuantityAvailable = styled.p`
  font-size: 15px;
  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 13px;
  }
`

export const DescriptionArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Description = styled.p`
  font-size: 18px;
  @media (min-width: 300px) and (max-width: 700px) {
    font-size: 14px;
  }
`
