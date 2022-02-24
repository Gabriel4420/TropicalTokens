import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 80px;
  margin-top: 22.93px;
  font-size: 40px;
  color: white;
  background: ${(props) => (props.background ? props.background : '#70cc98')};
  border-color: ${(props) => (props.background ? props.background : '#70cc98')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.borderRadius}px;
  align-items: center;
  span {
    padding-left: 10px;
    color: white;
    font-size: 30px;
  }

  .adjustment {
    margin-left: -6px;
    margin-bottom: -2px;
  }

  &:hover {
    filter: brightness(1.3);
  }
`
