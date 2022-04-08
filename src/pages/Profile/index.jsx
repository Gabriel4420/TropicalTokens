import api from '../../utils/api'

import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import { Title } from '../../components/atoms/Texts'
import { useState, useEffect } from 'react'

/* hooks */
import useFlashMessage from '../../hooks/useFlashMessage'
import RoundedImage from '../../components/atoms/RoundedImage'
import { Container } from 'reactstrap'

function Profile() {
  //states
  const [user, setUser] = useState({})
  const [preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token'))
  const { setFlashMessage } = useFlashMessage()
  //effects
  useEffect(() => {
    const fetchData = () => {
      api
        .get('/users/checkusers', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setUser(response.data)
        })
    }
    fetchData()
  }, [token])
  //handles
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  const onFileChange = (e) =>
    setPreview(e.target.files[0]) +
    setUser({ ...user, [e.target.name]: e.target.files[0] })

  const handleSubmit = async (e) => {
    e.preventDefault()

    let msgType = 'success'

    const formData = new FormData()

    const userFormData = await Object.keys(user).forEach((key) =>
      formData.append(key, user[key]),
    )

    formData.append('user', userFormData)

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })
    console.log(data)

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <Container>
        <Title>Perfil</Title>
        {user.image && (
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            <RoundedImage
              src={
                preview
                  ? URL.createObjectURL(preview)
                  : `${user.image}`
              }
              alt={user.name}
              width="40px"
            />
          </Container>
        )}
      </Container>
      <form onSubmit={handleSubmit}>
        <Container>
          <Input type="file" name="image" handleOnChange={onFileChange} />
          <Input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            handleOnChange={handleChange}
            value={user.email || ''}
          />
          <Input
            type="email"
            name="confirmemail"
            placeholder="Digite o e-mail"
            handleOnChange={handleChange}
            value={user.email || ''}
          />
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome"
            handleOnChange={handleChange}
            value={user.name || ''}
          />
          <Input
            type="text"
            name="wallet"
            placeholder="Digite sua Wallet"
            handleOnChange={handleChange}
            value={user.wallet || ''}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite a sua senha"
            handleOnChange={handleChange}
            value={user.password || ''}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            handleOnChange={handleChange}
            value={user.confirmPassword || ''}
          />
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            <Button type="submit" contentButton="Editar" />
          </Container>
        </Container>
      </form>
    </section>
  )
}

export default Profile
