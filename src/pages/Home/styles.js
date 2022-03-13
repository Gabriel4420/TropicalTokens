import styled from 'styled-components'

export const AboutArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 80px;
  a {
    text-decoration: none;
    color: black;
    font-size: 30px;
    padding-left: 5px;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    flex-direction: column;

    .logo {
      padding-bottom: 50px;
    }
  }
`

export const LogoAboutArea = styled.div`
  padding-right: 50px;
`
export const AreaCarrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }

  .before {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
export const CarrouselSection = styled.div`
  .titleTrends {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .rec.rec-arrow {
    color: #333;
    background-color: transparent;
    border: none !important;
    box-shadow: none;
  }

  .rec.rec-arrow:hover {
    color: #333;
    box-shadow: none;
    background-color: transparent;
  }

  .rec.rec-dot {
    background-color: #ccc;
    border: none;
  }

  .rec.rec-dot
`

export const TrendArtistArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
