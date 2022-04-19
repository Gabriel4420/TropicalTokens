import api from '../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

/* hooks */
import useFlashMessage from '../../hooks/useFlashMessage'

const ArtDetails = () => {
  const [art, setArt] = useState({})
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token'))

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
