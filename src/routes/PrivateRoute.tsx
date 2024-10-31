// src/routes/PrivateRoute.js
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../stores/userStore'
import { SvgSpinner } from '../components/Loading/SvgSpinner'

const PrivateRoute = ({ children }: React.ReactNode) => {
  const userData = useUserStore((state) => state.userData)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userData) {
      navigate('/login')
    }
  }, [userData, navigate])

  if (!userData) {
    // 로딩 표시나 다른 처리
    return <SvgSpinner />
  }

  return children
}

export default PrivateRoute
