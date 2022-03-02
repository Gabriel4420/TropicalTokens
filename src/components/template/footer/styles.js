import styled from 'styled-components'

export const Container = styled.footer`
  position: ${props => props.pos === "home" ? "fixed": "relative"};
  bottom: 0;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #333;
  @media (max-width: 632px) {
    flex-direction: column;
  }
`

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  @media (max-width: 632px) {
    align-items: center;
  }
`

export const ContentAreaMenu = styled.div`
  flex: 1;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  padding: 20px;

  a {
    color: white;
    text-decoration: none;
    margin-bottom: 20px;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const LeftAreaMenuSocialIcons = styled.div`
  flex: 1;
  .adjustment {
    margin-right: 20px;
  }
  padding: 20px;
`

export const MediumArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
`

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  @media (max-width: 632px) {
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100px;
`
