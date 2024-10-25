import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Input, InputBox } from '../../components/Input/style'
import { IconBtnImg, MainIconBtn } from '../../components/Button/style'
import PageLayout from '../../components/Layouts/PageLayout'
import CustomSelect from '../../components/Select/CustomSelect'
import NowPlayingMovie from './ui/NowPlayingMovie/NowPlayingMovie'
import UpcomingMovie from './ui/UpcomingMovie/UpcomingMovie'
import SearchIcon from '../../assets/svg/search.svg'
import { client } from '../../apis/instances'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'

export interface Movie {
  id: number
  posterImage: string
  age: 'all' | 12 | 15 | 18
  title: string
  isLikes: boolean
  totalLikes: number
}

// api 호출
const fetchMovieData = async (page: number, type: 'now-playing' | 'upcoming') => {
  try {
    const res = await client.get(`/api/v1/${type}-movie?page=${page}`)
    return res.data
  } catch (error) {
    console.error('영화 데이터 가져오기 실패:', error)
    throw new Error('영화 데이터를 가져오는 데 실패했습니다.')
  }
}

// 무한스크롤
const useGetMovieData = (type: 'now-playing' | 'upcoming') => {
  return useInfiniteQuery({
    queryKey: [`${type}-data`],
    queryFn: ({ pageParam = 1 }) => fetchMovieData(pageParam, type),
    getNextPageParam: (last) => {
      if (last.currentPage < last.totalPages) {
        return last.currentPage + 1
      }
      return undefined
    },
    initialPageParam: 1,
  })
}

const Movie = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const menu = urlSearchParams.get('menu')

  useEffect(() => {
    if (!menu) {
      setUrlSearchParams({ menu: 'now-playing' })
    }
  }, [menu])

  // 검색 기능
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

  // api data & 무한 스크롤
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMovieData(
    menu === 'now-playing' ? 'now-playing' : 'upcoming',
  )
  const { ref, inView } = useInView({
    threshold: 1.0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  // 영화 목록 추출
  const movieData = data?.pages.flatMap((page) => page.movies) || []
  console.log(movieData)

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
            {inputValue ? `"${inputValue}" 와 관련된 검색어` : '검색어를 입력해주세요.'}
          </SearchTitle>
          <CustomSelect items={['최신순', '가나다순', '평점순']} $direction='right' />
        </SearchContentBox>

        {menu === 'now-playing' && <NowPlayingMovie movieData={movieData} />}
        {menu === 'upcoming' && <UpcomingMovie movieData={movieData} />}
      </SearchResultWrapper>

      {/* 무한 스크롤을 위한 로딩 표시 */}
      <LoadMovie ref={ref} />
      {!isLoading && <SvgSpinner />}
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

const LoadMovie = styled.div`
  height: 8rem;
`
