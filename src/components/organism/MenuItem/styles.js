import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50vh;
  border-radius: 10px;

  background-color: ${(props) => (props.active ? '#0b4d08' : 'transparent')};
`
export const MenuIcon = styled.img`
  width: 34px;
  height: auto;
`
