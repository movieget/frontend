import { Route, Routes } from 'react-router-dom'
import { SvgSpinner } from '../components/Loading/SvgSpinner'
import { Suspense, lazy, useEffect, useState } from 'react'
import Common from '../pages/Common/Common'

const Main = lazy(() => import('../pages/Main/Main'))
const Movie = lazy(() => import('../pages/Movie/Movie'))
const Detail = lazy(() => import('../pages/Detail/Detail'))
const Cinema = lazy(() => import('../pages/Cinema/Cinema'))
const Login = lazy(() => import('../pages/Login/Login'))
const KakaoCallback = lazy(() => import('../pages/KakaoCallback/KakaoCallback'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

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
