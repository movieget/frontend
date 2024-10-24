import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Input, InputBox } from '../../components/Input/style'
import { IconBtnImg, MainIconBtn } from '../../components/Button/style'
import PageLayout from '../../components/Layouts/PageLayout'
import CustomSelect from '../../components/Select/CusomSelect'
import NowPlayingMovie from './ui/NowPlayingMovie/NowPlayingMovie'
import UpcomingMovie from './ui/UpcomingMovie/UpcomingMovie'
import SearchIcon from '../../assets/svg/search.svg'

export interface Movie {
  id: number
  posterImage: string
  playing: boolean
  age: 'all' | 12 | 15 | 18
  title: string
  isLikes: boolean
  totalLikes: number
}

const dummyData: Movie[] = [
  {
    id: 1,
    posterImage: '/public/img/detail_review01.jpg',
    playing: true,
    age: 'all',
    title: '타이틀 1',
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 2,
    posterImage: '/public/img/detail_review02.jpg',
    playing: false,
    age: 12,
    title: '타이틀 2',
    isLikes: false,
    totalLikes: 15000,
  },
  {
    id: 3,
    posterImage: '/public/img/detail_review03.jpg',
    playing: true,
    age: 15,
    title: '타이틀 3',
    isLikes: true,
    totalLikes: 32000,
  },
  {
    id: 4,
    posterImage: '/public/img/detail_review04.jpg',
    playing: false,
    age: 18,
    title: '타이틀 4',
    isLikes: false,
    totalLikes: 8000,
  },
  {
    id: 5,
    posterImage: '/public/img/detail_review05.jpg',
    playing: true,
    age: 'all',
    title: '타이틀 5',
    isLikes: true,
    totalLikes: 27000,
  },
  {
    id: 6,
    posterImage: '/public/img/detail_review06.jpg',
    playing: false,
    age: 12,
    title: '타이틀 6',
    isLikes: false,
    totalLikes: 19000,
  },
  {
    id: 7,
    posterImage: '/public/img/detail_review07.jpg',
    playing: true,
    age: 15,
    title: '타이틀 7',
    isLikes: true,
    totalLikes: 36000,
  },
  {
    id: 8,
    posterImage: '/public/img/detail_review08.jpg',
    playing: false,
    age: 18,
    title: '타이틀 8',
    isLikes: false,
    totalLikes: 12000,
  },
  {
    id: 9,
    posterImage: '/public/img/detail_review09.jpg',
    playing: true,
    age: 'all',
    title: '타이틀 9',
    isLikes: true,
    totalLikes: 30000,
  },
  {
    id: 10,
    posterImage: '/public/img/detail_review10.jpg',
    playing: false,
    age: 12,
    title: '타이틀 10',
    isLikes: false,
    totalLikes: 6000,
  },
  {
    id: 11,
    posterImage: '/public/img/detail_review11.jpg',
    playing: true,
    age: 15,
    title: '타이틀 11',
    isLikes: true,
    totalLikes: 28000,
  },
  {
    id: 12,
    posterImage: '/public/img/detail_review12.jpg',
    playing: false,
    age: 18,
    title: '타이틀 12',
    isLikes: false,
    totalLikes: 16000,
  },
  {
    id: 13,
    posterImage: '/public/img/detail_review13.jpg',
    playing: true,
    age: 'all',
    title: '타이틀 13',
    isLikes: true,
    totalLikes: 23000,
  },
  {
    id: 14,
    posterImage: '/public/img/detail_review14.jpg',
    playing: false,
    age: 12,
    title: '타이틀 14',
    isLikes: false,
    totalLikes: 8500,
  },
  {
    id: 15,
    posterImage: '/public/img/detail_review15.jpg',
    playing: true,
    age: 15,
    title: '타이틀 15',
    isLikes: true,
    totalLikes: 32000,
  },
  {
    id: 16,
    posterImage: '/public/img/detail_review16.jpg',
    playing: false,
    age: 18,
    title: '타이틀 16',
    isLikes: false,
    totalLikes: 19000,
  },
  {
    id: 17,
    posterImage: '/public/img/detail_review17.jpg',
    playing: true,
    age: 'all',
    title: '타이틀 17',
    isLikes: true,
    totalLikes: 27000,
  },
  {
    id: 18,
    posterImage: '/public/img/detail_review18.jpg',
    playing: false,
    age: 12,
    title: '타이틀 18',
    isLikes: false,
    totalLikes: 11000,
  },
  {
    id: 19,
    posterImage: '/public/img/detail_review19.jpg',
    playing: true,
    age: 15,
    title: '타이틀 19',
    isLikes: true,
    totalLikes: 36000,
  },
  {
    id: 20,
    posterImage: '/public/img/detail_review20.jpg',
    playing: false,
    age: 18,
    title: '타이틀 20',
    isLikes: false,
    totalLikes: 6500,
  },
]

const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>(dummyData)
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const menu = urlSearchParams.get('menu')

  useEffect(() => {
    if (!menu) {
      setUrlSearchParams({ menu: 'now-playing' })
    }
  }, [menu])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState('')

  const inputHandler = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value)
    }
  }

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <PageLayout>
      {/* 검색 */}
      <SearchBox onSubmit={formHandler}>
        <InputBox $width='100%'>
          <Input type='text' $radius='1.2rem' placeholder='검색어를 입력해주세요.' ref={inputRef} />
          <MainIconBtn onClick={inputHandler}>
            <IconBtnImg src={SearchIcon} />
          </MainIconBtn>
        </InputBox>
        <CategoryBtnBox>
          <Link to='?menu=now-playing'>
            <CategoryBtn type='button' $active={menu === 'now-playing'}>
              상영중
            </CategoryBtn>
          </Link>
          <Link to='?menu=upcoming'>
            <CategoryBtn type='button' $active={menu === 'upcoming'}>
              개봉예정
            </CategoryBtn>
          </Link>
        </CategoryBtnBox>
      </SearchBox>

      {/* 검색결과 */}
      <SearchResultWrapper>
        <SearchContentBox>
          <SearchTitle>
            {inputValue ? `${inputValue} 와 관련된 검색어` : '검색어를 입력해주세요.'}
          </SearchTitle>
          <CustomSelect items={['최신순', '가나다순', '평점순']} $direction='right' />
        </SearchContentBox>
        {menu === 'now-playing' && <NowPlayingMovie movie={movies} />}
        {menu === 'upcoming' && <UpcomingMovie />}
      </SearchResultWrapper>
    </PageLayout>
  )
}

export default Movie

// 검색
const SearchBox = styled.form`
  max-width: 67.2rem;
  margin: 4rem auto 0;
`
const CategoryBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.2rem;
`
const CategoryBtn = styled.button<{ $active?: boolean }>`
  min-width: 12.4rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  background: ${(props) =>
    props.$active ? 'linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb)' : '#353535'};
  border: 1px solid #3f3f3f;
  border-radius: 1.2rem;
  color: #fdfdfd;
`

// 검색결과
const SearchResultWrapper = styled.div`
  margin-top: 6rem;
`
const SearchContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.3rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid #3f3f3f;
`
const SearchTitle = styled.p`
  font-size: 3.6rem;
  font-weight: 600;
`
