import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Input, InputBox } from '../../components/Input/style'
import PageLayout from '../../components/Layouts/PageLayout'
import { IconBtnImg, MainIconBtn } from '../../components/Button/style'
import SearchIcon from '../../assets/svg/search.svg'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import CustomSelect from '../../components/Select/CusomSelect'

const Movie = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams()
  const menu = URLSearchParams.get('menu')

  useEffect(() => {
    if (!menu) {
      setURLSearchParams({ menu: 'now-playing' })
    }
  }, [menu])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputHandler = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value
    }
  }

  return (
    <PageLayout>
      {/* 검색 */}
      <SearchBox>
        <InputBox width='100%'>
          <Input type='text' radius='1.2rem' placeholder='텍스트' ref={inputRef} />
          <MainIconBtn onClick={inputHandler}>
            <IconBtnImg src={SearchIcon} />
          </MainIconBtn>
        </InputBox>
        <CategoryBtnBox>
          <Link to='?menu=now-playing'>
            <CategoryBtn active={menu === 'now-playing'}>상영중</CategoryBtn>
          </Link>
          <Link to='?menu=upcoming'>
            <CategoryBtn active={menu === 'upcoming'}>개봉예정</CategoryBtn>
          </Link>
        </CategoryBtnBox>
      </SearchBox>

      {/* 검색결과 */}
      <SearchResultWrapper>
        <SearchContentBox>
          <SearchTitle>검색내용</SearchTitle>
          <CustomSelect items={['바나나', '원숭이', '사나움사나움사나움']} $direction='right' />
        </SearchContentBox>
        {menu === 'now-playing' && <div>상영중 검색</div>}
        {menu === 'upcoming' && <div>개봉예정 검색</div>}
      </SearchResultWrapper>
    </PageLayout>
  )
}

export default Movie

// 검색
const SearchBox = styled.div`
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
const CategoryBtn = styled.button<{ active?: boolean }>`
  min-width: 12.4rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  background: ${(props) =>
    props.active ? 'linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb)' : '#353535'};
  border: 1px solid #3f3f3f;
  border-radius: 1.2rem;
  color: #fdfdfd;
`

// 검색결과
const SearchResultWrapper = styled.div``
const SearchContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SearchTitle = styled.p``
