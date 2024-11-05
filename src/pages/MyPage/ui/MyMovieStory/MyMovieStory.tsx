import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '../../../../stores/userStore'
import { getSuccessBookInfo } from '../BookingHistory/ui/BookingList'
import { getFavoriteMovies } from '../MyFavorites/ui/MyFavoriteList'
import { SvgSpinner } from '../../../../components/Loading/SvgSpinner'

const MyMovieStory = () => {
  const userId = useUserStore((state) => state.userData?.id)

  const { data, isLoading } = useQuery({
    queryKey: ['myMovieData', userId],
    queryFn: async () => {
      const [successBookInfo, favoriteMoviesData] = await Promise.all([
        getSuccessBookInfo(userId),
        getFavoriteMovies(userId),
      ])
      return { successBookInfo, favoriteMoviesData }
    },
    enabled: !!userId,
  })

  return (
    <MyMovieStoryBox>
      {isLoading && <SvgSpinner />}
      {data && (
        <>
          <MyMovieStoryTitle>나의 무비스토리</MyMovieStoryTitle>
          <MyMovieStoryList>
            <MyMovieStoryLi>
              <ActivityCount>{data?.successBookInfo.length}</ActivityCount>
              <ActivityTitle>예매</ActivityTitle>
            </MyMovieStoryLi>
            <MyMovieStoryLi>
              <ActivityCount>{data?.successBookInfo.length}</ActivityCount>
              <ActivityTitle>본 영화</ActivityTitle>
            </MyMovieStoryLi>
            <MyMovieStoryLi>
              <ActivityCount>2</ActivityCount>
              <ActivityTitle>리뷰 수</ActivityTitle>
            </MyMovieStoryLi>
            <MyMovieStoryLi>
              <ActivityCount>{data?.favoriteMoviesData.favorites.length}</ActivityCount>
              <ActivityTitle>찜한 영화</ActivityTitle>
            </MyMovieStoryLi>
          </MyMovieStoryList>
        </>
      )}
    </MyMovieStoryBox>
  )
}

export default MyMovieStory

const MyMovieStoryBox = styled.div`
  padding: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`

const MyMovieStoryTitle = styled.h3`
  margin-bottom: rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`

const MyMovieStoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.8rem;
  margin-top: 3.2rem;
`

const MyMovieStoryLi = styled.li`
  text-align: center;
`

const ActivityCount = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
`

const ActivityTitle = styled.p`
  margin-top: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
`
