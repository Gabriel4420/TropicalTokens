import React, { useState, useEffect } from 'react'
import api from '../../../utils/api'
import { useParams, Link } from 'react-router-dom'
import {
  Background,
  Container,
  TrendAvatarArea,
  UsernameTittleArea,
} from './styles'
import { UserAvatar } from '../../atoms/UserAvatar'

const TicketArtistName = ({ titleArtist, createBy, titleArt }) => {
  const [data, setData] = useState([])
  const [token] = useState(localStorage.getItem('token'))
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`arts/myarts`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
         
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
          .filter((item) => item.title == 'Gabriel Rodrigues Perez')
          .map((item, index) => {
            const { user } = item
          
            return (
              <TrendAvatarArea key={index}>
                {user ? (
                  <UserAvatar src={`${user.image}`} />
                ) : (
                  <UserAvatar src={`/images/leo.png`} />
                )}
              </TrendAvatarArea>
            )
          })}
        <UsernameTittleArea titleArtist={titleArtist}>
          <Link to="/profile">
            <h3>{titleArtist}</h3>
          </Link>
        </UsernameTittleArea>
      </Container>
    </Background>
  )
}

export default TicketArtistName
