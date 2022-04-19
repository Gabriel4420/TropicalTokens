import styled from 'styled-components'

export const ArtListContainer = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
export const ArtListRow = styled.div`
  border-bottom: 1px solid #16479d;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Action = styled.div`
  margin: auto;

  a,
  button {
    text-decoration: none;
    color: #16479d;
    border: 2px solid #16479d;
    border-radius: 5px;
    padding: 7px 12px;
    background-color: #fff;
    margin-left: 1em;
    cursor: pointer;
    transition: 0.3s;
    font-size: 12px;
  }

  a:hover,
  button:hover {
    background-color: #16479d;
    color: #fff;
  }
`
