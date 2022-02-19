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
export const ButtonEnter = styled.button`
  width: 100%;
  height: 80px;
  margin-top: 22.93px;
  font-size: 40px;
  color: white;
  /* Secondary effects*/
  background: #70cc98;
  border-color: #70cc98;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`
export const GoogleSocialButton = styled.button`
  display: flex;
  width: 382px;
  height: 63px;
  background: #fa3d3d;
  border-radius: 100px;

  align-items: center;
  margin-top: 10px;

  span {
    padding-left: 10px;
    color: white;
    font-size: 34px;
  }

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
export const SocialArea = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`
