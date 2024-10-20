import { useState } from 'react'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { MovieList, MovieListBox } from '../../../style'

interface Movie {
  id: number
  poster: string
  title: string
  age: string
  cancelDate: string
  seats: string[]
  refundAmount: number
  adultCount: number
  youthCount: number
  location: string
}

const dummyData = [
  {
    id: 0,
    poster: '',
    title: '크라벤',
    age: '18',
    cancelDate: '2024년 10월 21일',
    seats: ['A열 10석', 'A열 11석'],
    refundAmount: 40000,
    adultCount: 1,
    youthCount: 1,
    location: '메가박스 울산 성남 지점',
  },
  {
    id: 1,
    poster: '',
    title: '갓 더 뽀로로',
    age: '18',
    cancelDate: '2024년 12월 13일',
    seats: ['J열 3석'],
    refundAmount: 20000,
    adultCount: 1,
    youthCount: 0,
    location: '메가박스 울산 성남 지점',
  },
  {
    id: 2,
    poster: '',
    title: '다크나이트',
    age: 'all',
    cancelDate: '2024년 1월 2일',
    seats: ['D열 2석', 'D열 3석', 'D열 4석', 'D열 5석'],
    refundAmount: 80000,
    adultCount: 3,
    youthCount: 1,
    location: '메가박스 울산 성남 지점',
  },
  {
    id: 3,
    poster: '',
    title: '죠스',
    age: '12',
    cancelDate: '2020년 12월 3일',
    seats: [
      'F열 7석',
      'F열 8석',
      'F열 9석',
      'F열 10석',
      'F열 11석',
      'F열 12석',
      'F열 13석',
      'F열 14석',
    ],
    refundAmount: 160000,
    adultCount: 8,
    youthCount: 0,
    location: '메가박스 울산 성남 지점',
  },
]

const CancelList = () => {
  const [cancelList, setCancelList] = useState<Movie[]>(dummyData)
  return (
    <MovieListBox>
      {cancelList?.map((movie) => {
        return (
          <MovieList key={movie.id}>
            <MovieInfoCard
              $posterImage=''
              $title={movie.title}
              $age={movie.age}
              $cancelDate={movie.cancelDate}
              $seats={movie.seats}
              $refundAmount={movie.refundAmount}
              $adultCount={movie.adultCount}
              $youthCount={movie.youthCount}
              $location={movie.location}
            />
          </MovieList>
        )
      })}
    </MovieListBox>
  )
}

export default CancelList
