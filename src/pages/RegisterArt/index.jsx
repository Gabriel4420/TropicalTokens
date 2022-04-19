//Internal & external libs

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'

//Components, Hooks, Utils and Contexts

import useFlashMessage from '../../hooks/useFlashMessage'
import api from '../../utils/api'
import ArtForm from '../../components/organism/ArtForm'

//Begin Component

const AddArt = () => {
  const [token] = useState(localStorage.getItem('token'))
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  async function registerArt(art) {
    let msgType = 'success'

    const formData = new FormData()

    const artFormData = await Object.keys(art).forEach((key) =>
      formData.append(key, art[key]),
    )

    formData.append('arts', artFormData)

    const data = await api
      .post(`arts/create`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        const { data } = response
        return data
      })
      .catch((err) => {
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
    navigate('/admin')
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container className="col-6 col-md-4 col-sm-2">
        <h1 style={{ textAlign: 'center' }}>Cadastre sua Arte</h1>
        <ArtForm handleSubmit={registerArt} btnText="Cadastrar" />
      </Container>
    </section>
  )
}

export default AddArt
