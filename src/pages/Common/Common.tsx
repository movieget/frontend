import Bell from '../../assets/svg/bell.svg'
import Profile from '../../assets/img/Profile.svg'
import BasicProfile from '../../assets/svg/profile_user.svg'
import './style.css'

import useImagePreview from '../../hooks/useImagePreview'
import { BasicBtn, IconBtn, IconBtnImg, MainBtn, SocialBtn } from '../../components/Button/style'
import {
  DeletePreviewImg,
  ImgInpBox,
  InputBox,
  InputFile,
  InputFileLabel,
  Input,
  PreviewImg,
  PreviewImgBox,
  Textarea,
  TextareaBox,
  ProfileImgInpBox,
  ProfileAreaImgInpBox,
  ProfileInputFile,
  ProfileInputFileLabel,
  ProfilePreviewImgBox,
  ProfilePreviewImg,
} from '../../components/Input/style'
import {
  Checkbox,
  CheckboxWrapper,
  CheckHeart,
  CheckSeat,
  CheckText,
} from '../../components/Checkbox/style'
import {
  BadgeBox,
  Badge,
  StyleAge,
  StyleTitle,
  StyleProfile,
  StyleProfileImg,
} from '../../components/Badge/style'
import StarRating from '../../components/StarRating/StarRating'
import useRating from '../../hooks/useRating'
import Tabs from '../../components/Tab/Tab'
import CustomSelect from '../../components/Select/CusomSelect'
import MovieInfoCard from '../../components/MovieInfoCard/MovieInfoCard'
import styled from 'styled-components'
import {
  C_BasicBtn_L,
  C_BasicBtn_M,
  C_BasicBtn_S,
  C_MainBtn_L,
  C_MainBtn_M,
  C_MainBtn_S,
  C_DisabledBtn,
  C_MovieInfoCard,
  C_SocialBtnKakao,
  C_SocialBtnNaver,
  C_IconBtn,
  C_IconBtnAlarm,
  C_IconBtnMypage,
  C_InputBox,
  C_TextareaBox,
  C_CustomSelect,
  C_CheckboxBasic,
  C_CheckboxHeart,
  C_CheckboxSeat,
  C_ProfileImgInpBox,
  C_ImgInpBox,
  C_Badge,
  C_StyleAge,
  C_StyleProfile,
  C_Tabs,
  C_StyleTitle,
  C_StarRating,
  C_StarRating2,
} from './CommonCodes'

const Common = () => {
  const {
    image: image1,
    handleImageChange: handleImageChange1,
    resetImage: resetImage1,
  } = useImagePreview()
  const { image: image2, handleImageChange: handleImageChange2 } = useImagePreview()

  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()
  const { rating: userRating2, handleRatingChange: handleRatingChange2 } = useRating()
  return (
    <>
      <div className='common'>
        <h2 className='main-title'>공통 CSS</h2>
        <div className='container'>
          {/* 버튼 */}
          <section className='section'>
            <h3 className='sec-title'>- BUTTON</h3>
            <p className='sec-exp'>
              disabled는 전부 같은 형식으로 적용 가능 / 카카오 &네이버는 disabled가 없음
            </p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <BasicBtn $size='large'>기본버튼</BasicBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_BasicBtn_L} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $size='medium'>기본버튼</BasicBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_BasicBtn_M} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $size='small'>기본버튼</BasicBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_BasicBtn_S} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='large'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_MainBtn_L} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='medium'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_MainBtn_M} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='small'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_MainBtn_S} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $disabled>disabled 버튼(Basic/Main) 공용</BasicBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_DisabledBtn} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='kakao'>카카오로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_SocialBtnKakao} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_SocialBtnNaver} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 아이콘 버튼 */}
          <section className='section'>
            <h3 className='sec-title'>- ICON BUTTON</h3>
            <p className='sec-exp'>이미지 파일 필요 / import 필요</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <IconBtn>
                        <IconBtnImg src={Bell} />
                      </IconBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_IconBtnAlarm} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <IconBtn>
                        <IconBtnImg width='100%' height='100%' src={Profile} />
                      </IconBtn>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_IconBtnMypage} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 인풋 */}
          <section className='section'>
            <h3 className='sec-title'>- INPUT</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <InputBox width=''>
                        <Input type='text' width='' placeholder='텍스트' />
                        <Input type='password' width='' placeholder='패스워드' />
                      </InputBox>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_InputBox} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <TextareaBox width=''>
                        <Textarea width='' placeholder='텍스트를 입력하세요.' />
                      </TextareaBox>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_TextareaBox} />
                    </td>
                  </tr>
                  <tr>
                    <th className='h280'>
                      <CustomSelect items={['바나나', '원숭이', '사나움사나움사나움']} />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_CustomSelect} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 체크박스 */}
          <section className='section'>
            <h3 className='sec-title'>- CHECKBOX</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='checkboxText' name='' />
                        <CheckText htmlFor='checkboxText'>체크박스</CheckText>
                      </CheckboxWrapper>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_CheckboxBasic} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='checkboxHeart' name='' />
                        <CheckHeart htmlFor='checkboxHeart' />
                      </CheckboxWrapper>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_CheckboxHeart} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='seat' />
                        <CheckSeat htmlFor='seat' />
                        <Checkbox type='checkbox' id='disableSeat' disabled />
                        <CheckSeat htmlFor='disableSeat' />
                      </CheckboxWrapper>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_CheckboxSeat} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 인풋 - file */}
          <section className='section'>
            <h3 className='sec-title'>- INPUT - FILE</h3>
            <p className='sec-exp'>파일을 불러올 hook 데이터가 필요함</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <ImgInpBox>
                        <InputFile
                          type='file'
                          accept='image/*'
                          onChange={handleImageChange1}
                          id='file01'
                          ref={(input) => input && (input.value = '')}
                        />
                        <InputFileLabel htmlFor='file01'>파일첨부</InputFileLabel>
                        {image1 && (
                          <PreviewImgBox>
                            <PreviewImg src={image1} alt='첨부한 이미지 미리보기' />
                            <DeletePreviewImg onClick={resetImage1} />
                          </PreviewImgBox>
                        )}
                      </ImgInpBox>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_ImgInpBox} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <ProfileImgInpBox>
                        <ProfileAreaImgInpBox>
                          <ProfileInputFile
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange2}
                            id='file02'
                            ref={(input) => input && (input.value = '')}
                          />
                          <ProfileInputFileLabel htmlFor='file02'>파일첨부</ProfileInputFileLabel>
                          {image2 && (
                            <ProfilePreviewImgBox>
                              <ProfilePreviewImg src={image2} alt='첨부한 이미지 미리보기' />
                            </ProfilePreviewImgBox>
                          )}
                        </ProfileAreaImgInpBox>
                      </ProfileImgInpBox>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_ProfileImgInpBox} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 뱃지 */}
          <section className='section'>
            <h3 className='sec-title'>- BADGE</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <BadgeBox>
                        <Badge>일반/장르</Badge>
                        <Badge color='orange'>러닝타임</Badge>
                        <Badge $playing='playing'>상영중입니다</Badge>
                        <Badge $playing='notPlaying'>상영예정</Badge>
                      </BadgeBox>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_Badge} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <StyleAge $age='all' />
                      <StyleAge $age='12' />
                      <StyleAge $age='15' />
                      <StyleAge $age='18' />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_StyleAge} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <StyleProfile $width='' $height=''>
                        <StyleProfileImg src={BasicProfile} />
                      </StyleProfile>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_StyleProfile} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* TAB */}
          <section className='section'>
            <h3 className='sec-title'>- TAB</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <Tabs
                        tabs={['탭 1', '탭 2', '탭 3', '탭 4', '탭 5']}
                        contents={[
                          <div>탭 컨텐츠 1</div>,
                          <div>탭 컨텐츠 2</div>,
                          <div>탭 컨텐츠 3</div>,
                          <div>탭 컨텐츠 4</div>,
                          <div>탭 컨텐츠 5</div>,
                        ]}
                      />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_Tabs} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ETC */}
          <section className='section'>
            <h3 className='sec-title'>- ETC</h3>
            <p className='sec-exp'>기타등등...</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <StyleTitle>상영중 TOP 10</StyleTitle>
                    </th>
                    <td>
                      <MultilineTextComponent code={C_StyleTitle} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className='th-tit'>선택 가능</p>
                      <StarRating
                        rating={userRating1}
                        onRatingChange={handleRatingChange1}
                        userId='user1'
                      />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_StarRating} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className='th-tit'>선택 불가능</p>
                      <StarRating
                        rating={userRating2}
                        onRatingChange={handleRatingChange2}
                        userId='user2'
                        value={3}
                        disabled={true}
                      />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_StarRating2} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* MovieCard */}
          <section className='section'>
            <h3 className='sec-title'>- MovieCard</h3>
            <p className='sec-exp'>내용없음</p>
            <div className='table-box'>
              <table>
                <thead>
                  <tr>
                    <th>컴포넌트</th>
                    <th>태그</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <MovieInfoCard
                        $title='크라벤' // 영화 제목
                        $age='18' // 연령
                        $screeningDate='2024년 10월 20일' // 상영 날짜
                        $cancelDate='2024년 10월 18일' // 취소 가능한 날짜
                        $createdDate='2024년 10월 01일' // 작성된 날짜
                        $duration={204} // 상영 시간 (분 단위)
                        $reviewType='포토리뷰' // 리뷰의 종류
                        $rating={5} // 남긴 평점 (0~5 점)
                        $rewardPoints={120} // 적립 포인트
                        $seats={['E열 24석', 'E열 25석', 'E열 26석']} // 예약한 좌석 목록
                        $price={120000} // 총 가격 (원 단위)
                        $refundAmount={80000} // 환불 금액 (원 단위)
                        $adultCount={4} // 성인 수
                        $youthCount={2} // 청소년 수
                        $location='메가박스 울산 성남 지점' // 상영 지점
                        $posterImage='' // 영화 포스터 이미지 경로
                      />
                    </th>
                    <td>
                      <MultilineTextComponent code={C_MovieInfoCard} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Common

const MultilineTextComponent = ({ code }) => {
  return <TextWithLineBreak>{code}</TextWithLineBreak>
}

const TextWithLineBreak = styled.code`
  white-space: pre; /* 줄바꿈을 유지하면서 텍스트를 표시 */
  font-size: 1.8rem; /* 텍스트 크기 조정 */
  line-height: 1.5;
  letter-spacing: 0.8px;
`
