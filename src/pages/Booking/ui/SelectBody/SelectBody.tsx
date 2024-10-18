import { StyleAge } from '../../../../components/Badge/style'
import { BasicBtn, MainBtn } from '../../../../components/Button/style'
import {
  MovieName,
  NextBtnWrapper,
  SelectBodyWrapper,
  SelectBox,
  SelectBoxCol,
  SelectBoxRow,
  SelectBtn,
  SelectLineBox,
  SelectList,
  SelectLocation,
  SelectMovie,
  SelectTheater,
  SelectTime,
  SelectTitle,
} from './SelectBody.style'

const SelectBody = () => {
  return (
    <SelectBodyWrapper>
      <SelectBoxRow>
        <SelectMovie>
          <SelectTitle>영화</SelectTitle>
          <SelectBox>
            <SelectList>
              <SelectBtn>
                <StyleAge $age='18' />
                <MovieName>베테랑2</MovieName>
              </SelectBtn>
              <SelectBtn>
                <StyleAge $age='15' />
                <MovieName>다크나이트</MovieName>
              </SelectBtn>
              <SelectBtn>
                <StyleAge $age='all' />
                <MovieName>니모를 찾아서</MovieName>
              </SelectBtn>
            </SelectList>
          </SelectBox>
        </SelectMovie>

        <SelectBoxCol>
          <SelectLocation>
            <SelectTitle>지역</SelectTitle>
            <SelectBox>
              <SelectList>
                <SelectBtn>
                  <MovieName>울산</MovieName>
                </SelectBtn>
                <SelectBtn>
                  <MovieName>대구</MovieName>
                </SelectBtn>
                <SelectBtn>
                  <MovieName>부산</MovieName>
                </SelectBtn>
              </SelectList>
            </SelectBox>
          </SelectLocation>

          <SelectTheater>
            <SelectTitle>영화관</SelectTitle>
            <SelectBox>
              <SelectList>
                <SelectBtn>
                  <MovieName>울산 성남 메가박스</MovieName>
                </SelectBtn>
                <SelectBtn>
                  <MovieName>울산 성남 메가박스</MovieName>
                </SelectBtn>
                <SelectBtn>
                  <MovieName>울산 성남 메가박스</MovieName>
                </SelectBtn>
                <SelectBtn>
                  <MovieName>울산 성남 메가박스</MovieName>
                </SelectBtn>
              </SelectList>
            </SelectBox>
          </SelectTheater>
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTime>
        <SelectTitle>시간선택</SelectTitle>
        <SelectLineBox>
          <BasicBtn $size='medium'>13:20</BasicBtn>
          <MainBtn $size='medium'>15:20</MainBtn>
          <BasicBtn $size='medium'>17:20</BasicBtn>
          <BasicBtn $size='medium'>19:20</BasicBtn>
        </SelectLineBox>
      </SelectTime>

      <NextBtnWrapper>
        <MainBtn $size='large'>다음</MainBtn>
      </NextBtnWrapper>
    </SelectBodyWrapper>
  )
}

export default SelectBody
