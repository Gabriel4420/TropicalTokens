import styled from 'styled-components'

export const FormCentered = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;

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

export const Input = styled.input`
  width: 100%;
  max-width: 774px;
  height: 50px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 20px;
  margin: 10px;
  font-size: 14px;
  padding-left: 20px;
`

export const GoogleSocialButton = styled.button`
  display: flex;
  width: 382px;
  height: 63px;
  background: #fa3d3d;
  border-radius: 100px;

  align-items: center;
  margin-top: 10px;

  .adjustment {
    margin-left: -6px;
    margin-bottom: -2px;
  }
  border: 2px solid black;
  &:hover {
    filter: brightness(1.3);
  }
`

export const FacebookSocialButton = styled.button`
  display: flex;
  width: 382px;
  height: 63px;
  background: #1f83cb;
  border-radius: 100px;
  border: 2px solid black;
  align-items: center;
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
    font-size: 50px;
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