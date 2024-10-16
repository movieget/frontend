import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Movie from '../pages/Movie/Movie'
import Detail from '../pages/Detail/Detail'
import Booking from '../pages/Booking/Booking'
import Cinema from '../pages/Cinema/Cinema'
import Login from '../pages/Login/Login'
import KakaoCallback from '../pages/KakaoCallback/KakaoCallback'
import TossCallback from '../pages/TossCallback/TossCallback'
import NotFound from '../pages/NotFound/NotFound'
import Mypage from '../pages/MyPage/MyPage'
import Common from '../pages/Common/Common'
import { useQuery } from '@tanstack/react-query'
import { fetchFakeData } from '../utils/fakeApi'
import { SvgSpinner } from '../components/Loading/SvgSpinner'

const AppRoutes = () => {
  const { isLoading } = useQuery({
    queryKey: ['loadingTest'],
    queryFn: fetchFakeData,
  })
  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <SvgSpinner /> : <Main />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/cinema' element={<Cinema />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/kakao/callback' element={<KakaoCallback />} />
        <Route path='/toss/callback' element={<TossCallback />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/common' element={<Common />} />
      </Routes>
    </>
  )
}

export default AppRoutes
