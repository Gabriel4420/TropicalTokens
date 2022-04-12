import { Button, Container } from 'reactstrap'
import { useState } from 'react'
import RoundedImage from '../../atoms/RoundedImage'
import Input from '../../atoms/Input'

const ArtForm = ({ handleSubmit, artData, btnText }) => {
  const [art, setArt] = useState(artData || {})
  const [preview, setPreview] = useState()

  const onFileChange = (e) => {
    setPreview(e.target.files[0])
    setArt({ ...art, [e.target.name]: e.target.files[0] })
  }

  const handleChange = (e) => {
    setArt({ ...art, [e.target.name]: e.target.value })
  }

  const submit = (e) => e.preventDefault() + handleSubmit(art)

  return (
    <form onSubmit={submit}>
      <Container>
        {art.images && (
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            <RoundedImage
              src={preview ? URL.createObjectURL(preview) : `${art.images}`}
              alt={art.title}
              width="40px"
            />
          </Container>
        )}
      </Container>
      <Input
        placeholder="Anexa suas artes"
        name="images"
        type="file"
        handleOnChange={onFileChange}
      />
      <Input
        type="text"
        name="title"
        placeholder="Digite o titulo da arte"
        handleOnChange={handleChange}
        value={art.title || ''}
      />
      <Input
        type="text"
        name="urlipfs"
        placeholder="Digite a url do ipfs"
        handleOnChange={handleChange}
        value={art.urlipfs || ''}
      />
      <Input
        type="text"
        name="urlcertificadotoken"
        placeholder="Digite o url do certificado de token pela hathor ou waves"
        handleOnChange={handleChange}
        value={art.urlcertificadotoken || ''}
      />
      <Input
        type="number"
        name="quantityavailable"
        placeholder="Digite a quantidade de obras que serão cadastradas"
        handleOnChange={handleChange}
        value={art.quantityavailable || ''}
      />
      <Input
        type="text"
        name="description"
        placeholder="Diga o que sentiu ao criar essa obra prima"
        value={art.description || ''}
        handleOnChange={handleChange}
      />
      <Container className="col-6 col-sm-4 col-md-2 pt-3 mx-auto">
        <Button color="primary" type="submit">
          {btnText}
        </Button>
      </Container>
    </form>
  )
}

export default ArtForm
