//Internal & external libs
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//Components, Hooks, Utils and Contexts
import useFlashMessage from '../../hooks/useFlashMessage'
import api from '../../utils/api'

//Begin Component

const ArtDetails = () => {
  //States

  const [art, setArt] = useState({})
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token'))

  //Effects

  useEffect(() => {
    const fetchData = () => {
      api.get(`/arts/${id}`).then((response) => {
        setArt(response.data)
      })
    }
    fetchData()
  }, [id])

  return (
    <>
      {art.title && (
        <section /* className={styles.pet_details_container} */>
          <div /* className={styles.petdetails_header} */>
            <h1>{art.title}</h1>
          </div>
          <div /* className={styles.pet_images} */>
            <img key={art._id} src={art.image} alt={art.title} />
          </div>
          <p>{art.description}</p>
        </section>
      )}
    </>
  )
}

export default ArtDetails
