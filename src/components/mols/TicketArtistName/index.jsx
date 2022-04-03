import React, { useState, useEffect } from 'react'
import api from '../../../utils/api'

import {
  Background,
  Container,
  TrendAvatarArea,
  UsernameTittleArea,
} from './styles'
import { UserAvatar } from '../../atoms/UserAvatar'

const TicketArtistName = ({ titleArtist, createBy }) => {
  const [token] = useState(localStorage.getItem('token') || '')
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await api
        .get('/users/checkusers', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setData(response.data.users)
        })
    }

    fetchData()
  }, [data, token])

  return (
    <Background createBy={createBy}>
      <h3>{createBy}</h3>
      <Container>
        {data.map((item, index) => {
          const { image } = item
          return (
            <TrendAvatarArea key={index}>
              <UserAvatar
                src={`${process.env.REACT_APP_API}/images/user/${image}`}
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
