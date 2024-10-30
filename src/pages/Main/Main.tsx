import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'

const Main = () => {
  return (
    <>
      <MainTrailer />
      <MainList /* isPlayingMovies={isPlayingMovie} notPlayingMovies={notPlayingMovie} */ />
      <MainFooter />
    </>
  )
}

export default Main
