import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { MagnifyingGlass } from '@styled-icons/open-iconic/MagnifyingGlass'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'

export const Nav = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.2rem calc((100vw - 1000px) / 2); */
  z-index: 12;

  .NavLogoArea {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
      width: 300px;
    }
  }
`
export const NavLogo = styled.img`
  width: 100%;
  max-width: 200px;
  height: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: black;
  }
  @media screen and (max-width: 768px) {
    color: white;
    &:hover {
      font-weight: bold;
      color: white;
    }
    .person {
      color: black;
      margin-top: -40px;
    }
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    float: left;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  justify-content: center;

  .link {
    text-decoration: none;
    color: black;
    margin-left: 30px;
  }

  .link:hover {
    font-weight: bold;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #333;
    position: absolute;
    left: 275px;
    top: 60px;
    width: 30%;
    height: 200px;

    .link {
      text-decoration: none;
      color: white;
      margin-bottom: 20px;
      margin-top: 10px;
      margin-left: 0px;
    }
  }
`

export const Person = styled(PersonCircle)`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    .person {
      color: black;
    }
  }
`

export const IconAreas = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
