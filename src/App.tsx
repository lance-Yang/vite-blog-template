import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './router'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [])

  return <AppRoutes />
}

export default App
