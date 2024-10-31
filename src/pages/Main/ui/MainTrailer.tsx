import {
  StyleTrailer,
  StyleTrailerOverview,
  StyleTrailerSection,
  StyleTrailerText,
  StyleTrailerTitle,
  StyleTrailerWrapper,
} from '../style'

const MainTrailer = () => {
  return (
    <StyleTrailerSection>
      <StyleTrailerWrapper>
        <StyleTrailer
          width='100%'
          height='auto'
          style={{ aspectRatio: '16 / 9' }}
          // api에서 src 추가할경우 '${apiurl}?autoplay=1&mute=1' 맨뒤에 추가
          // src에 'si=...?' 붙으면 자동재생 안됩니다 -> api로 받을 주소 확인후 추가 해결방안 필요
          src='https://www.youtube-nocookie.com/embed/pDvBiB1waBk?autoplay=1&mute=1'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></StyleTrailer>
        <StyleTrailerText>
          {/* // 해당부분 받아오는 api에서 title, overview받아와 삽입할 예정 */}
          <StyleTrailerTitle>IU, 바이 썸머</StyleTrailerTitle>
          <StyleTrailerOverview>
            안녕? 여름!
            <br /> 안녕, 여름.
          </StyleTrailerOverview>
        </StyleTrailerText>
      </StyleTrailerWrapper>
    </StyleTrailerSection>
  )
}

export default MainTrailer
