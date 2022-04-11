import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  const register = async (user) => {
    let msgText = 'Cadastro realizado com sucesso!'

    let msgType = 'success'

    try {
      const data = await api
        .post('/users/register', user)
        .then((response) => response.data)

      await authUser(data)
    } catch (error) {
      // tratar erro
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }
  const registerArt = async (art) => {
    let msgText = 'Arte cadastrada com sucesso!'
    let msgType = 'success'

    try {
      const data = await api
        .post('/art/register', art)
        .then((response) => response.data)

      await authUser(data)
    } catch (error) {
      // tratar erro
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const login = async (user) => {
    let msgText = 'Login realizado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api
        .post('/users/login', user)
        .then((response) => response.data)

      await authUser(data)
    } catch (error) {
      // tratar erro
      msgText = error.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  const authUser = async (data) => {
    setAuthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))

    navigate('/')
  }

  const logout = () => {
    const msgText = 'Logout realizado com sucesso!'
    const msgType = 'success'

    setAuthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    navigate('/login')

    setFlashMessage(msgText, msgType)
  }

  return { authenticated, loading, registerArt, register, login, logout }
}

export default useAuth
