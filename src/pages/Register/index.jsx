import { useState, useContext } from 'react'
import Input from '../../components/atoms/Input'
import { Link } from 'react-router-dom'
import { Title } from '../../components/atoms/Texts'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'
/* contexts */
import { Context } from '../../contexts/UserContext'
import { Button, Container } from 'reactstrap'

const Register = () => {
  /* use States & useContext */

  const [user, setUser] = useState({})
  const { register } = useContext(Context)

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value })

  const handleSubmit = (e) => e.preventDefault() + register(user)

  return (
    <Container>
      <Title>Registrar</Title>
      <form onSubmit={handleSubmit} autocomplete="no">
        <Input
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Input
          type="text"
          name="wallet"
          placeholder="Digite sua endereço de wallet"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Input
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Input
          type="email"
          name="confirmemail"
          placeholder="Confirme seu email"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
          autocomplete="no"
        />
        <Container
          className="col-6 col-sm-4 col-md-2"
          style={{
            padding: '20px',
          }}
        >
          <Button color="primary" type="submit">
            Cadastrar
          </Button>
        </Container>
      </form>
      <Container className="col-6 col-sm-4 col-md-2">
        <p>
          Já tem conta?{' '}
          <Link style={{ fontWeight: 'bold' }} to="/login">
            Clique aqui.
          </Link>
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <div style={{ marginRight: '20px' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/hathor-wallet/id1465041963"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '300px',
                    fontWeight: 'bold',
                  }}
                >
                  <FaAppStoreIos size={43} style={{ marginRight: '10px' }} />
                  Download Hathor Wallet on Apple Store
                </Button>
              </a>
            </div>
            <div style={{ marginRight: '20px' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=network.hathor.wallet&hl=pt_BR&gl=US"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  color="success"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '300px',
                    fontWeight: 'bold',
                  }}
                >
                  <FaGooglePlay size={43} style={{ marginRight: '10px' }} />
                  Download Hathor Wallet on GooglePlay
                </Button>
              </a>
            </div>
          </Container>
        </p>
      </Container>
    </Container>
  )
}

export default Register
