import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  heigth: 65px;
  border-radius: 80px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px;
  .usernameArea{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: space-between;
    justify-content: center;
  }  
`;

export const TrendAvatarArea = styled.div`
  flex: 1;
  width: 25%;
`;

export const UsernameTittleArea = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: -30px;
  h3{
    font-weight: bold;
  }
`;

export const Background = styled.div`
  width: 30%;
`;