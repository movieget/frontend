import { Route, Routes } from 'react-router-dom'
import { SvgSpinner } from '../components/Loading/SvgSpinner'
import { Suspense, lazy } from 'react'
import PrivateRoute from './PrivateRoute'

const Main = lazy(() => import('../pages/Main/Main'))
const Movie = lazy(() => import('../pages/Movie/Movie'))
const Detail = lazy(() => import('../pages/Detail/Detail'))
const Cinema = lazy(() => import('../pages/Cinema/Cinema'))
const Login = lazy(() => import('../pages/Login/Login'))
const KakaoCallback = lazy(() => import('../pages/KakaoCallback/KakaoCallback'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const Booking = lazy(() => import('../pages/Booking/Booking'))
const TossCheckout = lazy(() => import('../pages/TossCheckout/TossCheckout'))
const Mypage = lazy(() => import('../pages/MyPage/MyPage'))
const TossSuccess = lazy(() => import('../pages/TossSuccess/TossSuccess'))
const TossFail = lazy(() => import('../pages/TossFail/TossFail'))
const Common = lazy(() => import('../pages/Common/Common'))

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path='/movie'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Movie />
            </Suspense>
          }
        />
        <Route
          path='/detail'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Detail />
            </Suspense>
          }
        />
        <Route
          path='/cinema'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Cinema />
            </Suspense>
          }
        />
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
        <Route
          path='/login'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/kakao/callback'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <KakaoCallback />
            </Suspense>
          }
        />
        <Route
          path='/common'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Common />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
