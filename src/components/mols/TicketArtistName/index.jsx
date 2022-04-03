import React, { useState, useEffect } from 'react'
import api from '../../../utils/api'

import {
  Background,
  Container,
  TrendAvatarArea,
  UsernameTittleArea,
} from './styles'
import { UserAvatar } from '../../atoms/UserAvatar'

const TicketArtistName = ({ titleArtist, createBy, titleArt }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await api.get('arts/').then((response) => {
        setData(response.data.arts)
      })
    }

    fetchData()
  }, [data])

  return (
    <Background createBy={createBy}>
      <h3>{createBy}</h3>
      <Container>
        {data
          .filter((item) => item.title === titleArt)
          .map((item, index) => {
            const { user } = item
            console.log(user)
            return (
              <TrendAvatarArea key={index}>
                <UserAvatar
                  src={`${
                    process.env.REACT_APP_API
                  }/images/users/${user.image.toString()}`}
                />
              </TrendAvatarArea>
            )
          })}
        <UsernameTittleArea titleArtist={titleArtist}>
          <h3>{titleArtist}</h3>
        </UsernameTittleArea>
      </Container>
    </Background>
  )
}

export default TicketArtistName
