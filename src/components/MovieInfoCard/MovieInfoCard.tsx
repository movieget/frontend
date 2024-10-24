import { StyleAge } from '../Badge/style'
import NoImageCard from '../NoImageCard/NoImageCard'
import StarRating from '../StarRating/StarRating'
import {
  MovieInfoCardWrapper,
  MoviePosterBox,
  MovieDetailBox,
  MovieTitleBox,
  MovieTitle,
  MovieInfoList,
  MovieInfo,
  MovieInfoTitle,
  MovieInfoContent,
  MoviePoster,
} from './style'

interface MovieInfoCardProps {
  $title?: string // 영화 제목 (선택적, 문자열)
  $age?: 'all' | 12 | 15 | 18 // 연령 정보를 추가
  $genre?: string[] // 장르 정보 (선택적, 문자열 배열)
  $overview?: string // 줄거리 정보 (선택적, 문자열)
  $screeningDate?: string // 상영 날짜 (선택적, 문자열)
  $bookingDate?: string // 예매 날짜 (선택적, 문자열)
  $cancelDate?: string // 취소 날짜 (선택적, 문자열)
  $createdDate?: string // 작성 날짜 (선택적, 문자열)
  $duration?: number // 상영 시간 (선택적, 분 단위, 숫자)
  $reviewType?: string // 리뷰 종류 (선택적, 문자열)
  $rating?: number // 남긴 평점 (선택적, 0~5 사이의 숫자)
  $rewardPoints?: number // 적립 포인트 (선택적, 숫자)
  $seats?: string[] // 예약한 좌석 목록 (선택적, 문자열 배열)
  $price?: number // 총 가격 (선택적, 원 단위, 숫자)
  $refundAmount?: number // 환불 금액 (선택적, 원 단위, 숫자)
  $adultCount?: number // 성인 수 (선택적, 숫자)
  $youthCount?: number // 청소년 수 (선택적, 숫자)
  $location?: string // 상영 지점 (선택적, 문자열)
  $posterImage?: string // 포스터 이미지 경로 (선택적, 문자열)
}

const MovieInfoCard: React.FC<MovieInfoCardProps> = ({
  $title,
  $age,
  $genre,
  $overview,
  $screeningDate,
  $bookingDate,
  $cancelDate,
  $createdDate,
  $duration,
  $reviewType,
  $rating,
  $rewardPoints,
  $seats,
  $price,
  $refundAmount,
  $adultCount,
  $youthCount,
  $location,
  $posterImage,
}) => {
  return (
    <MovieInfoCardWrapper>
      <MoviePosterBox>
        {$posterImage ? <MoviePoster src={$posterImage} alt={$title} /> : <NoImageCard />}
      </MoviePosterBox>
      <MovieDetailBox>
        <MovieTitleBox>
          {$age && <StyleAge $age={$age} />}
          {$title && <MovieTitle>{$title}</MovieTitle>}
        </MovieTitleBox>
        <MovieInfoList>
          {$bookingDate && (
            <MovieInfo>
              <MovieInfoTitle>예매일</MovieInfoTitle>
              <MovieInfoContent>: {$bookingDate}</MovieInfoContent>
            </MovieInfo>
          )}
          {$screeningDate && (
            <MovieInfo>
              <MovieInfoTitle>상영일</MovieInfoTitle>
              <MovieInfoContent>: {$screeningDate}</MovieInfoContent>
            </MovieInfo>
          )}
          {$cancelDate && (
            <MovieInfo>
              <MovieInfoTitle>취소일</MovieInfoTitle>
              <MovieInfoContent>: {$cancelDate}</MovieInfoContent>
            </MovieInfo>
          )}
          {$createdDate && (
            <MovieInfo>
              <MovieInfoTitle>작성일</MovieInfoTitle>
              <MovieInfoContent>: {$createdDate}</MovieInfoContent>
            </MovieInfo>
          )}
          {$genre && (
            <MovieInfo>
              <MovieInfoTitle>장르</MovieInfoTitle>
              <MovieInfoContent>: {$genre.join(', ')}</MovieInfoContent>
            </MovieInfo>
          )}
          {$overview && (
            <MovieInfo>
              <MovieInfoTitle>줄거리</MovieInfoTitle>
              <MovieInfoContent>: {$overview}</MovieInfoContent>
            </MovieInfo>
          )}
          {$reviewType && (
            <MovieInfo>
              <MovieInfoTitle>리뷰 종류</MovieInfoTitle>
              <MovieInfoContent>: {$reviewType}</MovieInfoContent>
            </MovieInfo>
          )}
          {$rating !== undefined && (
            <MovieInfo>
              <MovieInfoTitle>남긴 평점</MovieInfoTitle>
              <MovieInfoContent>
                :
                <StarRating
                  rating={$rating} // StarRating에 평점 전달
                  onRatingChange={() => {}} // 평가 변경 처리 (필요에 따라 수정)
                  userId='movieInfoCard' // 고유한 userId 설정
                  disabled={true} // 비활성화
                />
              </MovieInfoContent>
            </MovieInfo>
          )}
          {$rewardPoints !== undefined && (
            <MovieInfo>
              <MovieInfoTitle>적립 포인트</MovieInfoTitle>
              <MovieInfoContent>: {$rewardPoints}P</MovieInfoContent>
            </MovieInfo>
          )}
          {$seats && (
            <MovieInfo>
              <MovieInfoTitle>좌석</MovieInfoTitle>
              <MovieInfoContent>: {$seats.join(' / ')}</MovieInfoContent>
            </MovieInfo>
          )}
          {$price !== undefined && (
            <MovieInfo>
              <MovieInfoTitle>가격</MovieInfoTitle>
              <MovieInfoContent>: {$price.toLocaleString()}원</MovieInfoContent>
            </MovieInfo>
          )}
          {$refundAmount !== undefined && (
            <MovieInfo>
              <MovieInfoTitle>환불금액</MovieInfoTitle>
              <MovieInfoContent>: {$refundAmount.toLocaleString()}원</MovieInfoContent>
            </MovieInfo>
          )}
          {($adultCount !== undefined || $youthCount !== undefined) && (
            <MovieInfo>
              <MovieInfoTitle>인원 수</MovieInfoTitle>
              <MovieInfoContent>
                : {$adultCount ? `성인 ${$adultCount}` : ''}
                {$adultCount && $youthCount ? ' / ' : ''}
                {$youthCount ? `청소년 ${$youthCount}` : ''}
              </MovieInfoContent>
            </MovieInfo>
          )}
          {$duration !== undefined && (
            <MovieInfo>
              <MovieInfoTitle>상영시간</MovieInfoTitle>
              <MovieInfoContent>: {$duration}분</MovieInfoContent>
            </MovieInfo>
          )}
          {$location && (
            <MovieInfo>
              <MovieInfoTitle>지점</MovieInfoTitle>
              <MovieInfoContent>: {$location}</MovieInfoContent>
            </MovieInfo>
          )}
        </MovieInfoList>
      </MovieDetailBox>
    </MovieInfoCardWrapper>
  )
}

export default MovieInfoCard
