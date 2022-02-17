import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import * as C from './styles'

const Footer = () => (
  <C.Container>
    <C.LeftArea>
      <C.LeftAreaMenu>
        <div>Contact Us</div>
        <div>About</div>
      </C.LeftAreaMenu>
      <C.LeftAreaMenuSocialIcons>
        <BsInstagram className="adjustment" />
        <GrTwitter className="adjustment" />
      </C.LeftAreaMenuSocialIcons>
    </C.LeftArea>
    <C.MediumArea>asdaf</C.MediumArea>
    <C.RightArea>asdfasdf</C.RightArea>
  </C.Container>
)

export default Footer
