import Bell from '/svg/bell.svg'
import Profile from '/img/profile.svg'
import './style.css'

import {
  AddIconBtn,
  BasicBtn,
  IconBtn,
  IconBtnImg,
  IssueBtn,
  MainBtn,
  MainIconBtn,
  SocialBtn,
} from '../../components/Button/style'
import { InputBox, Input, Textarea, TextareaBox } from '../../components/Input/style'
import {
  Checkbox,
  CheckboxWrapper,
  CheckHeart,
  CheckHeartCount,
  CheckSeat,
  CheckText,
} from '../../components/Checkbox/style'
import { BadgeBox, Badge, StyleAge, StyleTitle } from '../../components/Badge/style'
import StarRating from '../../components/StarRating/StarRating'
import useRating from '../../hooks/useRating'
import Tabs from '../../components/Tab/Tab'
import CustomSelect from '../../components/Select/CustomSelect'
import MovieInfoCard from '../../components/MovieInfoCard/MovieInfoCard'
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
  C_IssueBtn_L,
  C_CheckHeartCount,
  C_AddIconBtn,
  C_SocialBtnGoogle,
  C_SocialBtnGithub,
  C_MainIconBtn,
  C_MovieCard,
  C_Modal,
} from './CommonCodes'
import FormattedCodeBlock from '../../components/CodeFormatter/CodeFormatter'
import { formatLikes } from '../../utils/formatLikes'
import ImageUpload from '../../components/Input/ImageUpload/ImageUpload'
import { useState } from 'react'
import ProfileImageUpload from '../../components/Input/ProfileImageUpload/ProfileImageUpload'
import ProfileBadge from '../../components/Badge/ProfileBadge/ProfileBadge'
import MovieCard from '../../components/MovieCard/MovieCard'
import Modal from '../../components/Modal/Modal'
import ExModalContent from '../../components/Modal/ExModalContent/ExModalContent'

const Common = () => {
  const [image1, setImage1] = useState<string | null>(null)
  const [image2, setImage2] = useState<string | null>(null)

  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()
  const { rating: userRating2, handleRatingChange: handleRatingChange2 } = useRating()

  const [modal, setModal] = useState(false)
  const handleModalButtonClick = () => {
    alert('모달 기능 함수')
  }
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
                      <FormattedCodeBlock code={C_BasicBtn_L} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $size='medium'>기본버튼</BasicBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_BasicBtn_M} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $size='small'>기본버튼</BasicBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_BasicBtn_S} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='large'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_MainBtn_L} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='medium'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_MainBtn_M} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainBtn $size='small'>메인버튼</MainBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_MainBtn_S} />
                    </td>
                  </tr>
                  {/*  */}
                  <tr>
                    <th>
                      <AddIconBtn>아이콘버튼</AddIconBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_AddIconBtn} />
                    </td>
                  </tr>
                  {/*  */}
                  <tr>
                    <th>
                      <IssueBtn $size='large'>이슈버튼</IssueBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_IssueBtn_L} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <BasicBtn $disabled>disabled 버튼(Basic/Main) 공용</BasicBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_DisabledBtn} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='kakao'>카카오로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_SocialBtnKakao} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_SocialBtnNaver} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='google'>구글로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_SocialBtnGoogle} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <SocialBtn $social='github'>깃허브로 시작하기</SocialBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_SocialBtnGithub} />
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
                      <FormattedCodeBlock code={C_IconBtnAlarm} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <IconBtn>
                        <IconBtnImg width='100%' height='100%' src={Profile} />
                      </IconBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_IconBtnMypage} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MainIconBtn>
                        <IconBtnImg src={Bell} />
                      </MainIconBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_MainIconBtn} />
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
                      <InputBox $width=''>
                        <Input type='text' $width='' placeholder='텍스트' $radius='' />
                        <Input type='password' $width='' placeholder='패스워드' $radius='' />
                      </InputBox>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_InputBox} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <TextareaBox $width=''>
                        <Textarea $width='' placeholder='텍스트를 입력하세요.' />
                      </TextareaBox>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_TextareaBox} />
                    </td>
                  </tr>
                  <tr>
                    <th className='h280'>
                      <CustomSelect
                        items={['바나나', '원숭이', '사나움사나움사나움']}
                        $direction='right'
                      />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_CustomSelect} />
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
                      <FormattedCodeBlock code={C_CheckboxBasic} />
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
                      <FormattedCodeBlock code={C_CheckboxHeart} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <CheckboxWrapper>
                        <Checkbox type='checkbox' id='CheckHeartCount' name='' />
                        <CheckHeartCount htmlFor='CheckHeartCount' $color=''>
                          {formatLikes(1000)}
                        </CheckHeartCount>
                      </CheckboxWrapper>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_CheckHeartCount} />
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
                      <FormattedCodeBlock code={C_CheckboxSeat} />
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
                      <ImageUpload image={image1} setImage={setImage1} />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_ImgInpBox} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <ProfileImageUpload image={image2} setImage={setImage2} />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_ProfileImgInpBox} />
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
                        <Badge $color='orange'>러닝타임</Badge>
                        <Badge $playing='playing'>상영중입니다</Badge>
                        <Badge $playing='notPlaying'>상영예정</Badge>
                      </BadgeBox>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_Badge} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <StyleAge $age={'all'} />
                      <StyleAge $age={12} />
                      <StyleAge $age={15} />
                      <StyleAge $age={18} />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_StyleAge} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <ProfileBadge src='' width='' height='' />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_StyleProfile} />
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
                        isSelect={true}
                        isAllDeleteBtn={true}
                      />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_Tabs} />
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
                      <FormattedCodeBlock code={C_StyleTitle} />
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
                      <FormattedCodeBlock code={C_StarRating} />
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
                      <FormattedCodeBlock code={C_StarRating2} />
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
                        $age={18} // 연령
                        $screeningDate='2024년 10월 20일' // 상영 날짜
                        $bookingDate='2024년 10월 20일' // 예매 날짜
                        $cancelDate='2024년 10월 18일' // 취소 가능한 날짜
                        $createdDate='2024년 10월 01일' // 작성된 날짜
                        $genre={['액션', '스릴러']} // 장르
                        $overview='주인공이 가족을 구하기 위해 싸우는 이야기입니다.' // 줄거리
                        $duration={204} // 상영 시간 (분 단위)
                        $reviewType='포토리뷰' // 리뷰의 종류
                        $rating={3} // 남긴 평점 (0~5 점)
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
                      <FormattedCodeBlock code={C_MovieInfoCard} />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <MovieCard
                        $movieId={1}
                        $posterImage='/img/detail_review01.jpg'
                        $title='타이틀'
                        $age={18}
                        $playing={true}
                        $totalLikes={3000}
                      />
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_MovieCard} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ETC */}
          <section className='section'>
            <h3 className='sec-title'>- MODAL</h3>
            <p className='sec-exp'>모달</p>
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
                      {modal && (
                        <Modal
                          title={'리뷰 수정'}
                          content={<ExModalContent />}
                          btnText={'수정하기'}
                          onClose={() => setModal(false)}
                          onBtnClick={handleModalButtonClick}
                        />
                      )}

                      <MainBtn $size='large' onClick={() => setModal(true)}>
                        모달버튼
                      </MainBtn>
                    </th>
                    <td>
                      <FormattedCodeBlock code={C_Modal} />
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
