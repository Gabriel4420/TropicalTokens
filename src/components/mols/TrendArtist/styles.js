import styled from 'styled-components'

export const Header = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 300px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const TrendNft = styled.img`
  width: 180px;
  height: 165px;
`
export const TrendNftArea = styled.div`
  width: 15%;
  padding: 10px;
  @media (min-width: 300px) and (max-width: 600px) {
    width: 200px;
  }
`
export const TrendArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  .TitleArt {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`
export const TicketArtistArea = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`

export const TicketLeilaoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
  margin-right: 20px;
`

export const ButtonArtwork = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #666666;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:hover {
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`
