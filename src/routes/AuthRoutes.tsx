// src/routes/AuthRoutes.js
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SvgSpinner } from '../components/Loading/SvgSpinner'
import PrivateRoute from './PrivateRoute'

const Booking = lazy(() => import('../pages/Booking/Booking'))
const Mypage = lazy(() => import('../pages/MyPage/MyPage'))
const TossCheckout = lazy(() => import('../pages/TossCheckout/TossCheckout'))
const TossSuccess = lazy(() => import('../pages/TossSuccess/TossSuccess'))
const TossFail = lazy(() => import('../pages/TossFail/TossFail'))

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path='/booking'
        element={
          <PrivateRoute>
            <Suspense fallback={<SvgSpinner />}>
              <Booking />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path='/mypage'
        element={
          <PrivateRoute>
            <Suspense fallback={<SvgSpinner />}>
              <Mypage />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path='/toss/checkout'
        element={
          <PrivateRoute>
            <Suspense fallback={<SvgSpinner />}>
              <TossCheckout />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path='/toss/success'
        element={
          <PrivateRoute>
            <Suspense fallback={<SvgSpinner />}>
              <TossSuccess />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path='/toss/fail'
        element={
          <PrivateRoute>
            <Suspense fallback={<SvgSpinner />}>
              <TossFail />
            </Suspense>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AuthRoutes
