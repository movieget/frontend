import { fetchMovieListData } from '../../apis/movieApi'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { IMovieStoreProps } from './type'
import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const Main = () => {
  // props로 하위 컴포넌트에 뿌릴예정이기 때문에 전역상태관리 불필요
  // const { nowMovies, soonMovies, setNowMovies, setSoonMovies } = useMovieStore()

  const [nowMovies, setNowMovies] = useState<IMovieStoreProps[] | null>(null)
  const [soonMovies, setSoonMovies] = useState<IMovieStoreProps[] | null>(null)

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

  console.log(nowMovies)
  console.log(soonMovies)

  // 데이터 상태변경시 랜더링
  useEffect(() => {
    if (nowData) {
      setNowMovies(nowData)
    }
    if (soonData) {
      setSoonMovies(soonData)
    }
  }, [nowData, soonData])

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
      <MainTrailer nowData={nowMovies} />
      <MainList nowData={nowMovies} soonData={soonMovies} />
      <MainFooter />
    </>
  )
}

export default Main
