import { useState } from 'react'
import { MainBtn } from '../../../../../components/Button/style'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BtnBox, MovieList, MovieListBox } from '../../../style'
import {
  Checkbox,
  CheckboxWrapper,
  CheckHeartCount,
} from '../../../../../components/Checkbox/style'
import { formatLikes } from '../../../../../utils/formatLikes'

interface Favorite {
  id: number
  poster: string
  title: string
  age: string
  genre: string[]
  overview: string
  totalLikes: number
  isLikes: boolean
}

const dummyData = [
  {
    id: 0,
    poster: '',
    title: '크라벤',
    age: '18',
    genre: ['액션', 'SF/판타지'],
    overview: '줄거리',
    totalLikes: 200,
    isLikes: true,
  },
  {
    id: 1,
    poster: '',
    title: '다크나이트',
    age: 'all',
    genre: ['스릴러', '멜로', '공포', '어린이', 'SF/판타지'],
    overview:
      '줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리줄거리',
    totalLikes: 1262,
    isLikes: true,
  },
]

const MyFavoritList = () => {
  const [favoriteList, setFavoriteList] = useState<Favorite[]>(dummyData)

  return (
    <MovieListBox>
      {favoriteList?.map((movie) => {
        return (
          <MovieList key={movie.id}>
            <MovieInfoCard
              $posterImage=''
              $title={movie.title}
              $age={movie.age}
              $genre={movie.genre}
              $overview={movie.overview}
            />
            <BtnBox>
              <CheckboxWrapper>
                <Checkbox
                  type='checkbox'
                  id={`checkbox-${movie.id}`}
                  name=''
                  checked={movie.isLikes}
                />
                <CheckHeartCount htmlFor={`checkbox-${movie.id}`}>
                  {formatLikes(movie.totalLikes)}
                </CheckHeartCount>
              </CheckboxWrapper>
              <MainBtn $size='large'>예매하기</MainBtn>
            </BtnBox>
          </MovieList>
        )
      })}
    </MovieListBox>
  )
}

export default MyFavoritList
