//Bootstrap Dist

import 'bootstrap/dist/css/bootstrap.css'

//Internal & external libs

import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import { FcSearch } from 'react-icons/fc'

//Internal Styles

import { SearchArea, TableArea } from './styles'

//Components, Hooks, Utils and Contexts

import api from '../../utils/api'
import Input from '../../components/atoms/Input'
import { Title } from '../../components/atoms/Texts'

//Begin Component

const Users = () => {
  //States

  const [users, setUsers] = useState([])
  const [token] = useState(localStorage.getItem('token'))
  let authors = []

  //Effects

  useEffect(() => {
    const fetchData = () => {
      api.get('/users').then((response) => {
        setUsers(response.data.artists)
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
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              const { name, arts } = item

              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>
                    {arts.filter((item) => item.available === true).length}
                  </td>
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
