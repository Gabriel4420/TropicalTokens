import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { SearchArea, TableArea } from './styles'
import Input from '../../components/atoms/Input'
import { Title } from '../../components/atoms/Texts'
import 'bootstrap/dist/css/bootstrap.css'
import { Table } from 'reactstrap'
import { FcSearch } from 'react-icons/fc'

const Users = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await api.get('/arts').then((response) => {
        setData(response.data.arts)
      })
    }

    fetchData()
  }, [data])
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
            {data.map((item, index) => {
              const { user } = item

              return (
                <tr key={index}>
                  <td>
                    {user.image}
                    {user.name}
                  </td>
                  <td>{data.length}</td>
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
