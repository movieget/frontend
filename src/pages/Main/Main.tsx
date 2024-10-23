import { client } from '../../apis/instances'
import {
  StyleTrailerContents,
  StyleTrailerSection,
  StyleTrailerText,
  StyleTrailerWrapper,
} from './style'

const Main = () => {
  const page = 2
  const fetchData = async () => {
    const res = await client.get(`/api/v1/review?page=${page}`)
    const data = res.data
    console.log(data)
  }
  return (
    <>
      <h2>메인페이지</h2>
      <button onClick={fetchData}>fetch!</button>
      <StyleTrailerSection>
        <StyleTrailerContents>
          <StyleTrailerWrapper>
            {/* 영상이 들어갈 자리 */}
            <StyleTrailerText>
              <h1>IU, 바이 썸머</h1>
              <span>
                안녕? 여름!
                <br /> 안녕, 여름.
              </span>
            </StyleTrailerText>
          </StyleTrailerWrapper>
        </StyleTrailerContents>
      </StyleTrailerSection>
      {/* <MovieList /> */}
    </>
  )
}

export default Main

// const MovieCard: React.FC<IfMovieCardProps> = ({ $title, $age, $likes, $playing, $isPlaying }) => {
//   return (
//     <StyleMovieCardWrapper $isPlaying={isPlaying}>
//       <StyleMovieCard>
//         <Badge $playing='playing'>상영중</Badge>
//         <Badge $color={playing ? 'primary' : 'gray'} $playing={playing ? 'playing' : 'notPlaying'}>
//           {status}
//         </Badge>
//         <StyleMovieTitle>
//           <StyleAge $age={age} /> {title}
//         </StyleMovieTitle>
//         <CheckboxWrapper>
//           <Checkbox type='checkbox' id='CheckHeartCount' name='' />
//           <CheckHeartCount
//             htmlFor='CheckHeartCount'
//             $padding=''
//             $borderColor='opercity'
//             $color='opercity'
//           >
//             {formatLikes(likes)}
//           </CheckHeartCount>
//         </CheckboxWrapper>

//         <BasicBtn $size='medium'>기본버튼</BasicBtn>
//         {playing ? <MainBtn $size='medium'>예매하기</MainBtn> : <p></p>}
//       </StyleMovieCard>
//     </StyleMovieCardWrapper>
//   )
// }

// const MovieList: React.FC = () => {
//   const movies = [
//     {
//       title: 'API 언제 나오나요?',
//       age: 'all',
//       likes: 22500,
//       status: '상영중',
//       isPlaying: true,
//     },
//     {
//       title: 'API는 아직 준비 중입니다',
//       age: 12,
//       likes: 15000,
//       status: '개봉예정',
//       isPlaying: false,
//     },
//     {
//       title: 'API 언제 나오나요?',
//       age: 'all',
//       likes: 22500,
//       status: '상영중',
//       isPlaying: true,
//     },
//     {
//       title: 'API는 아직 준비 중입니다',
//       age: 12,
//       likes: 15000,
//       status: '개봉예정',
//       isPlaying: false,
//     },
//     {
//       title: 'API 언제 나오나요?',
//       age: 'all',
//       likes: 22500,
//       status: '상영중',
//       isPlaying: true,
//     },
//     {
//       title: 'API는 아직 준비 중입니다',
//       age: 12,
//       likes: 15000,
//       status: '개봉예정',
//       isPlaying: false,
//     },
//   ]

//   return (
//     <>
//       <div>
//         <StyleTitle>상영중 TOP 10</StyleTitle>
//         {movies
//           .filter((movie) => movie.isPlaying)
//           .map((movie) => (
//             <MovieCard key={movie.title} {...movie} />
//           ))}
//       </div>
//       <div>
//         <StyleTitle>개봉예정 TOP 10</StyleTitle>
//         {movies
//           .filter((movie) => !movie.isPlaying)
//           .map((movie) => (
//             <MovieCard key={movie.title} {...movie} />
//           ))}
//       </div>
//     </>
//   )
// }
