import { useEffect, useState } from 'react'
import {
  StyleTrailer,
  StyleTrailerOverview,
  StyleTrailerSection,
  StyleTrailerText,
  StyleTrailerTitle,
  StyleTrailerWrapper,
} from '../style'

// dummy
interface Trailer {
  id?: number
  title?: string
  overview?: string
  trailerUrl?: string
}

const movieTrailerUrl: Trailer[] = [
  {
    id: 0,
    title: '적재',
    overview:
      '적재(JUKJAE)의 킬링보이스를 라이브로! - 별 보러 가자, 그리워, 나랑 같이 걸을래, 사랑한대, Runnaway, SAY,…ㅣ딩고뮤직ㅣDingo Music',
    trailerUrl: 'y6hfuamDZ0w',
  },
  { id: 1, title: '아이유', overview: '안녕! 바다? 안녕, 여름.', trailerUrl: 'pDvBiB1waBk' },
  {
    id: 2,
    title: 'Kenshi Yonezu',
    overview: '米津玄師 - がらくた Kenshi Yonezu - Garakuta JUNK',
    trailerUrl: '2mUC91bXt60',
  },
  {
    id: 3,
    title: '예준',
    overview: '우리가 맞다는 대답을 할거에요',
    trailerUrl: 'FgzN6v5ZbXA',
  },
  {
    id: 4,
    title: '태연',
    overview:
      '태연(TAEYEON)의 킬링보이스를 라이브로! - I,그대라는 시,만약에,11:11,Blue,Time Lapse,Weekend,불티,사계,Gravity,INVU,너를 그리는 시간',
    trailerUrl: '5ch94AaPZRQ',
  },
  {
    id: 5,
    title: 'HONNE',
    overview:
      '혼네의 킬링보이스를 라이브로! - free love, Location Unknown, BACK ON TOP, by my side, Warm On A Cold Night, Day 1',
    trailerUrl: '81yQY3TseKQ',
  },
  {
    id: 6,
    title: 'YUI',
    overview: 'GOOD-BYE DAYS',
    trailerUrl: '3gtMR5R2T4I',
  },
  {
    id: 7,
    title: 'Clean Bendit',
    overview: 'Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video]',
    trailerUrl: 'papuvlVeZg8',
  },
  {
    id: 8,
    title: 'Anne-Marie',
    overview:
      '앤-마리(Anne-Marie)의 킬링보이스를 라이브로! - 2002, FRIENDS, Birthday, PSYCHO, Beautiful, Perfect to Me | 딩고뮤직',
    trailerUrl: 'SAzUYWru-w0',
  },
  {
    id: 9,
    title: '밤비',
    overview: '[2024 PLAVE BIRTHDAY GIFT] 밤비 - Pretender (원곡 : Official髭男dism)',
    trailerUrl: '9SA6degN604',
  },
  {
    id: 10,
    title: '백예린',
    overview: '[직캠] 백예린(Yerin Baek) - Square 2017',
    trailerUrl: '_md16sTcnPM',
  },
  {
    id: 11,
    title: 'Johnny Stimson',
    overview:
      '조니 스팀슨(Johnny Stimson)의 킬링보이스를 라이브로! - Flower, Gimme Gimme, Pink Lemonade, Butterflies, Smile',
    trailerUrl: 'UsYlkCSvPHs',
  },
  {
    id: 10,
    title: 'ヨルシカ',
    overview: '晴る',
    trailerUrl: 'CkvWJNt77mU',
  },
]

const MainTrailer = () => {
  const [randomTrailer, setRandomTrailer] = useState(null)

  useEffect(() => {
    // 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * movieTrailerUrl.length)
    // 선택한 트레일러 데이터 설정
    setRandomTrailer(movieTrailerUrl[randomIndex])
  }, [])

  if (!randomTrailer) return null

  return (
    <StyleTrailerSection>
      <StyleTrailerWrapper>
        {randomTrailer && (
          <StyleTrailer
            width='100%'
            height='auto'
            style={{ aspectRatio: '16 / 9' }}
            // api에서 src 추가할경우 '${apiurl}?autoplay=1&mute=1' 맨뒤에 추가
            // src에 'si=...?' 붙으면 자동재생 안됩니다 -> api로 받을 주소 확인후 추가 해결방안 필요
            src={`https://www.youtube-nocookie.com/embed/${randomTrailer.trailerUrl}?autoplay=1&mute=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></StyleTrailer>
        )}

        <StyleTrailerText>
          {/* // 해당부분 받아오는 api에서 title, overview받아와 삽입할 예정 */}
          <StyleTrailerTitle>{randomTrailer.title}</StyleTrailerTitle>
          <StyleTrailerOverview>{randomTrailer.overview}</StyleTrailerOverview>
        </StyleTrailerText>
      </StyleTrailerWrapper>
    </StyleTrailerSection>
  )
}

export default MainTrailer
