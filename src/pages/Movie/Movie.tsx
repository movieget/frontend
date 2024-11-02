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
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'

export interface Movie {
  id: number // 영화 ID
  poster_image: string // 포스터 이미지 URL
  backdrop_image: string // 배경 이미지 URL
  title: string // 영화 제목
  age_rating: 'all' | '12' | '15' | '18' // 연령 제한
  playing: boolean // 상영중 & 개봉예정
  genre: string // 장르 배열
  duration: number // 상영 시간 (분)
  overview: string // 영화 개요
  trailer_url: string // 트레일러 URL (선택적)
  actor_images: { name: string; image_url: string }[] // 출연 배우 배열
  is_likes: boolean // 좋아요 여부
  total_likes: number // 총 좋아요 수
}

const fetchMovieData = async (type: 'now' | 'soon', page: number) => {
  try {
    const res = await client.get(`/movie/movies/${type}?page=${page}&limit=10`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res.data
  } catch (error) {
    throw new Error('영화 데이터를 가져오는 데 실패했습니다.')
  }
}

// 무한스크롤
const useGetMovieData = (menu: 'now' | 'soon') => {
  return useInfiniteQuery({
    queryKey: [`movie-data-${menu}`], // 메뉴에 따라 쿼리 키 변경
    queryFn: ({ pageParam = 1 }) => fetchMovieData(menu, pageParam),
    getNextPageParam: (last) => {
      if (last.nextPage < last.total) {
        return last.nextPage
      }
      return undefined
    },
    initialPageParam: 1,
  })
}

const fetchSearchData = async (inputValue: string) => {
  const res = await client.get(`/movie/?page=1&limit=10&search=${inputValue}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.data
}

const Movie = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const menu = urlSearchParams.get('menu') || 'now' // 기본값 설정
  const [sortOption, setSortOption] = useState('최신순') // 기본 정렬 기준
  const [inputValue, setInputValue] = useState('') // 검색어 상태 추가

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMovieData(
    menu as 'now' | 'soon',
  )

  const { ref, inView } = useInView({
    threshold: 1.0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  useEffect(() => {
    setUrlSearchParams({ menu })
    setInputValue('') // 메뉴 변경 시 검색어 초기화
  }, [menu, setUrlSearchParams])

  // 검색 기능
  const inputRef = useRef<HTMLInputElement | null>(null)
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

  const { data: searchData } = useQuery({
    queryKey: ['search-data', inputValue],
    queryFn: () => fetchSearchData(inputValue),
    enabled: !!inputValue, // inputValue가 있을 때만 쿼리 실행
  })

  // 영화 목록 추출
  const movieData = data?.pages.flatMap((page) => page.movies) || []
  console.log(movieData)
  const searchResults = searchData?.movies || []

  // 영화 데이터 정렬
  const sortMovies = (movies: Movie[]) => {
    switch (sortOption) {
      case '가나다순':
        return [...movies].sort((a, b) => a.title.localeCompare(b.title))
      default:
        return [...movies] // 기본적으로 정렬하지 않음
    }
  }

  const sortedMovieData = sortMovies(movieData)

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
          <Link to='?menu=now' onClick={() => setInputValue('')}>
            <CategoryBtn type='button' $active={menu === 'now'}>
              상영중
            </CategoryBtn>
          </Link>
          <Link to='?menu=soon' onClick={() => setInputValue('')}>
            <CategoryBtn type='button' $active={menu === 'soon'}>
              개봉예정
            </CategoryBtn>
          </Link>
        </CategoryBtnBox>
      </SearchBox>

      {/* 영화 목록 렌더링 */}
      <SearchResultWrapper>
        <SearchContentBox>
          <SearchTitle>
            {inputValue ? `"${inputValue}" 와 관련된 검색어` : '검색어를 입력해주세요.'}
          </SearchTitle>
          <CustomSelect items={['가나다순']} $direction='right' onSelect={setSortOption} />
        </SearchContentBox>

        {searchResults.length > 0 ? (
          <NowPlayingMovie movieData={searchResults} /> // 검색 결과 표시
        ) : (
          <>
            {menu === 'now' && <NowPlayingMovie movieData={sortedMovieData} />}
            {menu === 'soon' && <UpcomingMovie movieData={sortedMovieData} />}
          </>
        )}
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
