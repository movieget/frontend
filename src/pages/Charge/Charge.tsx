import { useNavigate } from 'react-router-dom'
import { BasicBtn, MainBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { ChargeBtnBox, ChargeContainer, ChargeContentsBox, ChargeHeader } from './style'
import { useEffect } from 'react'
import MovieInfoCard from '../../components/MovieInfoCard/MovieInfoCard'

const Charge = () => {
  const navigate = useNavigate()

  // 뒤로가기 막기 -> 결제페이지로 가는것을 막고 메인페이지로 이동
  // popstate는 단순히 이벤트만 처리, 히스토리 변경 X -> 사용자가 뒤로가기를 시도했다가 앞으로 가면 원래있던 페이지로 되돌아감
  useEffect(() => {
    const preventBack = () => {
      // 현재 페이지의 상태를 새로 push
      // history.pushState -> 브라우저히스토리 조작 ->현재 페이지의 상태를 히스토리에 새로 추가함으로써 뒤로갈수 없게만듬
      window.history.pushState(null, '', window.location.href)
      alert('이전페이지로 돌아갈 수 없습니다. 메인페이지로 이동합니다.')
      navigate('/', { replace: true })
    }
    window.history.pushState(null, '', window.location.href)
    // popstate: 뒤로가려는 시도를 잡아 alert를 띄움
    // preventBack: 뒤로가는 동작 방해(history를 바꿔서 방해)
    window.addEventListener('popstate', preventBack)

    return () => {
      window.removeEventListener('popstate', preventBack)
    }
  }, [navigate])

  return (
    <ContainerLayout>
      <ChargeContainer>
        <ChargeHeader>
          <p>
            50,000원
            <br />
            결제가 완료되었습니다.
          </p>
        </ChargeHeader>
        <ChargeContentsBox>
          <MovieInfoCard
            $posterImage=''
            $age='15'
            $title='위키드'
            $bookingDate='2024년 10월 22일'
            $screeningDate='2024년 11월 20일'
            $duration={160}
            $adultCount={2}
            $location='메가박스 울산 성남 지점'
          />
        </ChargeContentsBox>
        <ChargeBtnBox>
          {/* navigate - replace : true -> 페이지로 이동 후 뒤로가기 안됨 */}
          <BasicBtn $size='large' onClick={() => navigate('/mypage', { replace: true })}>
            예약내역확인
          </BasicBtn>
          <MainBtn $size='large' onClick={() => navigate('/')}>
            메인으로가기
          </MainBtn>
        </ChargeBtnBox>
      </ChargeContainer>
    </ContainerLayout>
  )
}

export default Charge
