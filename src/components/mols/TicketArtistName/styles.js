import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  heigth: 65px;
  border-radius: 80px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  
  .usernameArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-between;
    justify-content: center;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    max-width: 200px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 1024px;
  }
`

export const TrendAvatarArea = styled.div`
  flex: 1;
  width: 25%;
 
`

export const UsernameTittleArea = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -100px;
  h3 {
    font-weight: bold;
  }

  @media (min-width: 200px) and (max-width: 600px) {
    margin-left: -30px;
  }
`

export const Background = styled.div`
  width: 30%;
  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
