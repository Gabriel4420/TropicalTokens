import styled from 'styled-components'

export const MessageContainer = styled.div`
  width: 100%;
  padding: 1em;
  border: none;
  margin: 0 auto;
  text-align: center;
  max-width: 60%;
  margin: 1em auto;
  border-radius: 5px;
  color: ${props => props.typeflash == 'error'? '#721c24':'#155724'};
  background-color:${props => props.typeflash == 'error'?'#f8d7da':'#d4edda'} ;
  border-color: ${props => props.typeflash == 'error'?'#f5c6cb':'#c3e6cb'} ;
 
`
