// src/routes/PrivateRoute.js
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'
import { SvgSpinner } from '../components/Loading/SvgSpinner'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userData = useUserStore((state) => state.userData)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userData) {
      navigate('/login')
    }
  }, [userData, navigate])

  if (!userData) {
    return <SvgSpinner />
  }

  return children
}

export default PrivateRoute
