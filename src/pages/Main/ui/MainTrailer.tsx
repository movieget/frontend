import React from 'react'
import {
  StyleTrailer,
  StyleTrailerContents,
  StyleTrailerSection,
  StyleTrailerText,
  StyleTrailerWrapper,
} from '../style'

const MainTrailer = () => {
  return (
    <StyleTrailerSection>
      <StyleTrailerContents>
        <StyleTrailerWrapper>
          <StyleTrailer
            width='100%'
            style={{ aspectRatio: '16 / 9' }}
            // api에서 src링크 받아와서 추가할경우 '${apiurl}?autoplay=1&mute=1' 이런방식으로 사용
            src='https://www.youtube-nocookie.com/embed/pDvBiB1waBk?si=QZVl9sGxSlw7b8S?autoplay=1&mute=1'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></StyleTrailer>
        </StyleTrailerWrapper>
        <StyleTrailerText>
          <h1>IU, 바이 썸머</h1>
          <span>
            안녕? 여름!
            <br /> 안녕, 여름.
          </span>
        </StyleTrailerText>
      </StyleTrailerContents>
    </StyleTrailerSection>
  )
}

export default MainTrailer
