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
  const [data2, setData2] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await api.get('arts/').then((response) => {
        setData(response.data.arts)
      })
    }

    fetchData()
  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      await api.get('users/').then((response) => {
        console.log(response.data)
        setData2(response.data.artists)
      })
    }

    fetchData()
  }, [data2])

  return (
    <Background createBy={createBy}>
      <h3>{createBy}</h3>
      <Container>
        {data2
          .filter((item) => item.name === 'Gabriel')
          .map((item, index) => {
            const { image } = item

            return (
              <TrendAvatarArea key={index}>
                {image ? (
                  <UserAvatar
                    src={`${
                      process.env.REACT_APP_API
                    }/images/users/${image.toString()}`}
                  />
                ) : (
                  <UserAvatar src={`/images/leo.png`} />
                )}
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
