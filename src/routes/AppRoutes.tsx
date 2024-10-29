import { Route, Routes } from 'react-router-dom'
import { SvgSpinner } from '../components/Loading/SvgSpinner'
import { Suspense, lazy } from 'react'
import Common from '../pages/Common/Common'
import Charge from '../pages/Charge/Charge'

const Main = lazy(() => import('../pages/Main/Main'))
const Movie = lazy(() => import('../pages/Movie/Movie'))
const Detail = lazy(() => import('../pages/Detail/Detail'))
const Booking = lazy(() => import('../pages/Booking/Booking'))
const Cinema = lazy(() => import('../pages/Cinema/Cinema'))
const Login = lazy(() => import('../pages/Login/Login'))
const KakaoCallback = lazy(() => import('../pages/KakaoCallback/KakaoCallback'))
const TossCheckout = lazy(() => import('../pages/TossCheckout/TossCheckout'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const Mypage = lazy(() => import('../pages/MyPage/MyPage'))

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
          path='/booking'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Booking />
            </Suspense>
          }
        />
        <Route
          path='/charge'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Charge />
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
          path='/login'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <Login />
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
          path='/kakao/callback'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <KakaoCallback />
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
          path='*'
          element={
            <Suspense fallback={<SvgSpinner />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route path='/common' element={<Common />} />
      </Routes>
    </>
  )
}

export default AppRoutes
