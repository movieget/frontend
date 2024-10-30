import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { SvgSpinner } from '../components/Loading/SvgSpinner'
import { useUserStore } from '../stores/userStore'

const Booking = lazy(() => import('../pages/Booking/Booking'))
const Mypage = lazy(() => import('../pages/MyPage/MyPage'))
const TossCheckout = lazy(() => import('../pages/TossCheckout/TossCheckout'))
const TossSuccess = lazy(() => import('../pages/TossSuccess/TossSuccess'))
const TossFail = lazy(() => import('../pages/TossFail/TossFail'))

const AuthRoutes = () => {
  const userData = useUserStore((state) => state.userData)
  const setLogout = useUserStore((state) => state.setLogout)
  const navigate = useNavigate()

  // 엑세스토큰 유저정보 << 동시에옴.

  useEffect(() => {
    if (!userData) {
      navigate('/login')
      // 만약, 유저데이터가 없으면
      // 로그인페이지로 튕군다.
    }
  }, [userData, setLogout])
  return (
    <Routes>
      <Route
        path='/booking'
        element={
          <Suspense fallback={<SvgSpinner />}>
            <Booking />
          </Suspense>
        }
      />
      <Route
        path='/mypage'
        element={
          <Suspense fallback={<SvgSpinner />}>
            <Mypage />
          </Suspense>
        }
      />
      <Route
        path='/toss/checkout'
        element={
          <Suspense fallback={<SvgSpinner />}>
            <TossCheckout />
          </Suspense>
        }
      />
      <Route
        path='/toss/success'
        element={
          <Suspense fallback={<SvgSpinner />}>
            <TossSuccess />
          </Suspense>
        }
      />
      <Route
        path='/toss/fail'
        element={
          <Suspense fallback={<SvgSpinner />}>
            <TossFail />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default AuthRoutes
