import React, { useState } from 'react'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import styled from 'styled-components'
import { MovieList, MovieListBox } from '../../../style'

interface Movie {
  id: number
  poster: string
  title: string
  age: string
  bookingDate: string
  screeningDate: string
  seats: string[]
  price: number
  adultCount: number
  youthCount: number
  duration: number
  location: string
  watched: boolean
}

const dummyData = [
  {
    id: 0,
    poster: '',
    title: '크라벤',
    age: '18',
    bookingDate: '2024년 10월 20일',
    screeningDate: '2024년 10월 21일',
    seats: ['A열 10석', 'A열 11석'],
    price: 40000,
    adultCount: 1,
    youthCount: 1,
    duration: 102,
    location: '메가박스 울산 성남 지점',
    watched: false,
  },
  {
    id: 1,
    poster: '',
    title: '갓 더 뽀로로',
    age: '18',
    bookingDate: '2024년 10월 20일',
    screeningDate: '2024년 12월 13일',
    seats: ['J열 3석'],
    price: 20000,
    adultCount: 1,
    youthCount: 0,
    duration: 300,
    location: '메가박스 울산 성남 지점',
    watched: false,
  },
  {
    id: 2,
    poster: '',
    title: '다크나이트',
    age: 'all',
    bookingDate: '2023년 12월 23일',
    screeningDate: '2024년 1월 2일',
    seats: ['D열 2석', 'D열 3석', 'D열 4석', 'D열 5석'],
    price: 80000,
    adultCount: 3,
    youthCount: 1,
    duration: 80,
    location: '메가박스 울산 성남 지점',
    watched: true,
  },
  {
    id: 3,
    poster: '',
    title: '죠스',
    age: '12',
    bookingDate: '2020년 12월 1일',
    screeningDate: '2020년 12월 3일',
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
    price: 160000,
    adultCount: 8,
    youthCount: 0,
    duration: 80,
    location: '메가박스 울산 성남 지점',
    watched: true,
  },
]

const BookingList = () => {
  const [bookingList, setBookingList] = useState<Movie[]>(dummyData)

  return (
    <MovieListBox>
      {bookingList?.map((movie) => {
        return (
          <MovieList key={movie.id}>
            <MovieInfoCard
              $posterImage=''
              $title={movie.title}
              $age={movie.age}
              $bookingDate={movie.bookingDate}
              $screeningDate={movie.screeningDate}
              $duration={movie.duration}
              $seats={movie.seats}
              $price={movie.price}
              $adultCount={movie.adultCount}
              $youthCount={movie.youthCount}
              $location={movie.location}
            />
            <BtnBox>
              <BasicBtn $size='large'>예매 변경</BasicBtn>
              <MainBtn $size='large' $disabled={movie.watched}>
                예매 취소
              </MainBtn>
            </BtnBox>
          </MovieList>
        )
      })}
    </MovieListBox>
  )
}

export default BookingList

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
