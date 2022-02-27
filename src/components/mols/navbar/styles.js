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
  }
`
export const NavLogo = styled.img`
  width: 100%;
  max-width: 200px;
  height: 100px;
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
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Lupa = styled(MagnifyingGlass)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const Person = styled(PersonCircle)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const IconAreas = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
