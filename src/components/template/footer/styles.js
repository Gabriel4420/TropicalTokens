import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #333;
`

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const LeftAreaMenu = styled.div`
  flex: 1;
  padding: 20px;
`

export const LeftAreaMenuSocialIcons = styled.div`
  flex: 1;
  .adjustment {
    margin-right: 10px;
  }
`

export const MediumArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`
