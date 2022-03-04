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
