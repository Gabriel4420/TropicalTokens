//Internal & external libs

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Container } from 'reactstrap'

//Intern Styles

import { ArtListContainer, ArtListRow, Action } from './styles'

//Components, Hooks, Utils and Contexts

import api from '../../utils/api'
import RoundedImage from '../../components/atoms/RoundedImage'
import useFlashMessage from '../../hooks/useFlashMessage'

//Begin Component

const MyArts = () => {
  //States
  const [arts, setArts] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()

  const navigate = useNavigate()

  //Effects

  useEffect(() => {
    api
      .get('/arts/myarts', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setArts(response.data.arts)
      })
  }, [token])

  //Handles

  const removeArt = async (id) => {
    let msgType = 'success'

    const data = await api
      .delete(`/arts/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedArts = arts.filter((art) => art._id != id)
        setArts(updatedArts)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <Container>
        <h1>Minhas Artes</h1>
        <Button onClick={() => navigate('/registerArt')}>Cadastrar arte</Button>
      </Container>
      <ArtListContainer>
        {arts.length > 0 &&
          arts.map((item) => {
            const { title, image, description } = item
            return (
              <ArtListRow key={item._id}>
                <RoundedImage src={image} alt={title} width="px75" />
                <span className="bold">{title}</span>
                <p>{description}</p>
                <Action>
                  {item.available ? (
                    <>
                      <Link to={`/art/edit/${item._id}`}>Editar</Link>
                      <button
                        onClick={() => {
                          removeArt(item._id)
                        }}
                      >
                        Excluir
                      </button>
                    </>
                  ) : (
                    <p>Arte não disponivel</p>
                  )}
                </Action>
              </ArtListRow>
            )
          })}
      </ArtListContainer>
    </section>
  )
}

export default MyArts
