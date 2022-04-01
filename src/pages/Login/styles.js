import styled from 'styled-components'

export const FormCentered = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;

  &:placeholder {
    padding-left: 29px;
    color: #70cc98;
  }

  h1 {
    margin: 0 0 15px 0;
    padding: 0;
    color: #70cc98;
  }
`

export const SocialArea = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .text {
    color: #70cc98;
    font-size: 30px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const LabelTitleLoginArea = styled.div`
  margin-top: 30px;
`
