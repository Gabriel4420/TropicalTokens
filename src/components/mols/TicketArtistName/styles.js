import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  max-width: 250px;
  heigth: 65px;
  border-radius: 80px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 300px) and (max-width: 600px) {
    width: 400px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 1024px;
  }
`

export const TrendAvatarArea = styled.div`
  flex: 1;
  width: 100%;
`

export const UsernameTittleArea = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -100px;
  margin-top: 10px;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-left: 0px;
    color: black;
  }

  h3:hover {
    text-decoration: underline;
  }

  @media (min-width: 200px) and (max-width: 600px) {
   
    h3 {
      margin-left: 0px;
    }
  }
`

export const Background = styled.div`
  width: 100%;
  @media (min-width: 300px) and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
