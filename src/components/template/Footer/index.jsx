import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import * as C from './styles'

const Footer = ({pos}) => (
  <C.Container pos={pos}>
    <C.LeftArea>
      <C.ContentAreaMenu>
        <Link to="/contact">Contact Us</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tropicaltokens.com/#mission"
        >
          About
        </a>
      </C.ContentAreaMenu>
      <C.LeftAreaMenuSocialIcons>
        <BsInstagram size={50} className="adjustment" />
        <GrTwitter size={50} className="adjustment" />
      </C.LeftAreaMenuSocialIcons>
    </C.LeftArea>
    <C.MediumArea>
      <C.Logo src="/images/logo.png" />
    </C.MediumArea>
    <C.RightArea>
      <C.ContentAreaMenu>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link> 
        <Link to="/users">Users</Link>
      </C.ContentAreaMenu>
    </C.RightArea>
  </C.Container>
)

export default Footer
