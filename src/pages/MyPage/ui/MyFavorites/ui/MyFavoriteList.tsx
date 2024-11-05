import { MainBtn } from '../../../../../components/Button/style'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BtnBox, MovieList, MovieListBox } from '../../../style'
import {
  Checkbox,
  CheckboxWrapper,
  CheckHeartCount,
} from '../../../../../components/Checkbox/style'
import { formatLikes } from '../../../../../utils/formatLikes'
import { client } from '../../../../../apis/instances'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useUserStore } from '../../../../../stores/userStore'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { commonColors } from '../../../../../styles/theme'
import { postLikeStatus } from '../../../../../components/MovieCard/MovieCard'
import { LineMdAlertLoop } from '../../../../../../public/svg/LineMdAlertLoop'
import { useNavigate } from 'react-router-dom'

interface Favorite {
  favorite_id: number
  movie_id: number
  is_liked: boolean
  title: string
  poster_image: string
  age_rating: 'all' | '12' | '15' | '18' | undefined
  genre: string
  overview: string
  trailer_url: string
  duration: number
  rating: number
  total_likes: number
}

export const getFavoriteMovies = async (userId: string | undefined) => {
  const res = await client.get(`/favorites?user_id=${userId}`)
  return res.data
}

const MyFavoriteList = () => {
  const userId = useUserStore((state) => state.userData?.id)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: favoriteMoviesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['favoriteMovies', userId],
    queryFn: () => getFavoriteMovies(userId),
    enabled: !!userId,
  })

  const mutation = useMutation({
    mutationFn: postLikeStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['favoriteMovies', userId])
    },
    onError: (error) => {
      console.log('에러', error)
    },
  })

  const handleCheckboxChange = (id: number, isLiked: boolean) => {
    if (userId) {
      mutation.mutate({ id, isLiked: !isLiked, userId: Number(userId) })
    }
  }

  const truncateString = (str: string) => {
    return str.length > 12 ? str.slice(0, 12) + '...' : str
  }

  return (
    <MovieListBox>
      {(isLoading || mutation.isPending) && <SvgSpinner />}
      {isError && (
        <ErrorMsg>
          <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
          <span>{error.message}</span>
          <MainBtn $size='large' onClick={() => refetch()}>
            재시도
          </MainBtn>
        </ErrorMsg>
      )}
      {favoriteMoviesData &&
        favoriteMoviesData.favorites.map((movie: Favorite) => (
          <MovieList key={movie.favorite_id}>
            <MovieInfoCard
              $posterImage={movie.poster_image}
              $title={truncateString(movie.title)}
              $age={movie.age_rating}
              $genre={movie.genre}
              $duration={movie.duration}
            />
            <BtnBox>
              <CheckboxWrapper>
                <Checkbox
                  type='checkbox'
                  id={`checkbox-${movie.favorite_id}`}
                  name={movie.title}
                  checked={movie.is_liked}
                  onChange={() => handleCheckboxChange(movie.movie_id, movie.is_liked)}
                />
                <CheckHeartCount htmlFor={`checkbox-${movie.favorite_id}`}>
                  {formatLikes(movie.total_likes)}
                </CheckHeartCount>
              </CheckboxWrapper>
              <MainBtn
                $size='large'
                onClick={() => navigate(`/booking?movie_id=${movie.movie_id}`)}
              >
                예매하기
              </MainBtn>
            </BtnBox>
          </MovieList>
        ))}
    </MovieListBox>
  )
}

export default MyFavoriteList
