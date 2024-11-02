import { fetchMovieListData } from '../../apis/movieApi'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { useMovieStore } from '../../stores/store'
import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const Main = () => {
  const { nowMovies, soonMovies, setNowMovies, setSoonMovies } = useMovieStore()

  // 상영 중인 영화 데이터 쿼리
  const {
    data: nowData,
    isLoading: nowLoading,
    isError: nowError,
  } = useQuery({
    queryKey: ['nowMovies'],
    queryFn: () => fetchMovieListData('now'),
  })

  // 상영 예정 영화 데이터 쿼리
  const {
    data: soonData,
    isLoading: soonLoading,
    isError: soonError,
  } = useQuery({
    queryKey: ['soonMovies'],
    queryFn: () => fetchMovieListData('soon'),
  })

  // 데이터 상태변경시 랜더링
  useEffect(() => {
    if (nowData) {
      setNowMovies(nowData)
    }
    if (soonData) {
      setSoonMovies(soonData)
    }
  }, [nowData, soonData, setNowMovies, setSoonMovies])

  if (!nowData && nowLoading) {
    return <SvgSpinner />
  } else if (!nowData && nowError) {
    console.error(nowError)
  }
  if (!soonData && soonLoading) {
    return <SvgSpinner />
  } else if (!soonData && soonError) {
    console.error(soonError)
  }

  return (
    <>
      <MainTrailer />
      <MainList />
      <MainFooter />
    </>
  )
}

export default Main
