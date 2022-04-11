import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { SearchArea, TableArea } from './styles'
import Input from '../../components/atoms/Input'
import { Title } from '../../components/atoms/Texts'
import 'bootstrap/dist/css/bootstrap.css'
import { Table } from 'reactstrap'
import { FcSearch } from 'react-icons/fc'

const Users = () => {
  const [art, setArt] = useState([])
  const [userId, setUserId] = useState('')
  const [token] = useState(localStorage.getItem('token'))
  useEffect(() => {
    const fetchData = () => {
      api
        .get('/users', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          console.log(response)
          setUserId(response.data.artists[0]._id)
        })
    }
    fetchData()
  }, [token])
  useEffect(() => {
    const fetchData = () => {
      api
        .get('/arts', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          console.log(response)
          setArt(response.data.arts)
        })
    }
    fetchData()
  }, [token])
  return (
    <div>
      <Title className="center">Users</Title>
      <SearchArea>
        <Input mode="hard-radius" icon>
          <FcSearch className="iconProps" />
        </Input>
      </SearchArea>
      <TableArea responsive>
        <Table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Collectors</th>
              <th>Collections</th>
            </tr>
          </thead>
          <tbody>
            {art

              .map((item, index) => {
                const { user } = item

                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{index + 1}</td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
      </TableArea>
    </div>
  )
}

export default Users
