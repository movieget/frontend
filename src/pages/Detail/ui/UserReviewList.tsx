import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { client } from '../../../apis/instances'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import ProfileBadge from '../../../components/Badge/ProfileBadge/ProfileBadge'
import StarRating from '../../../components/StarRating/StarRating'
import { SvgSpinner } from '../../../components/Loading/SvgSpinner'

interface Review {
  id: number
  reviewImage: string
  userId: string
  creationDate: string
  score: number
  title: string
  content: string
}

const fetchReviewData = async (currentPage: any) => {
  const res = await client.get(`/api/v1/review?page=${currentPage}`)
  const data = res.data
  return data
}

const useGetReviewData = () => {
  return useInfiniteQuery({
    queryKey: ['popular-movie'],
    queryFn: ({ pageParam }) => {
      return fetchReviewData(pageParam)
    },
    getNextPageParam: (last) => {
      if (last.currentPage < last.totalPages) {
        return last.currentPage + 1
      }
      return undefined
    },
    initialPageParam: 1,
  })
}

const UserReviewList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetReviewData()

  const { ref, inView } = useInView({
    threshold: 1.0, // 요소가 100% 보일 때
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    } else if (inView && !hasNextPage) {
      alert('마지막 리뷰 입니다.')
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <UserReviewWrapper>
        <Masonry
          breakpointCols={4} // 화면 크기에 따라 열 수 조정
          className='my-masonry-grid' // 클래스 이름
          columnClassName='my-masonry-grid_column' // 각 열의 클래스 이름
        >
          {data?.pages.map((page) =>
            page.reviews.map((review: Review) => (
              <UserReviewBox key={review?.id}>
                <ReviewImgBox>
                  <ReviewImg src={review?.reviewImage} alt='사람들이 업로드한 이미지' />
                </ReviewImgBox>
                <ReviewInfoBox>
                  <ReviewUserInfo>
                    <UserInfoHolder>
                      <ProfileBadge src='' width='3.2rem' height='3.2rem' />
                      <UserInfoBox>
                        <UserId>{review.userId}</UserId>
                        <CreationDate>{review.creationDate}</CreationDate>
                      </UserInfoBox>
                    </UserInfoHolder>
                    <StarRating value={review.score} disabled={true} />
                  </ReviewUserInfo>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <ReviewContent>{review.content}</ReviewContent>
                </ReviewInfoBox>
              </UserReviewBox>
            )),
          )}
        </Masonry>
      </UserReviewWrapper>
      <LoadReview ref={ref} />
      {!isLoading && <SvgSpinner />}
    </>
  )
}

export default UserReviewList

// 카드 스켈레톤 UI 작업 보류(리팩토링때 진행)
// const SkeletonBox = styled.div`
//   height: 300px;
//   background-color: ${({ theme }) => theme.colors.bg_wrapper};
//   position: relative;
// `

// const Skeleton = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     90deg,
//     rgba(255, 255, 255, 0.1) 0%,
//     rgba(200, 200, 200, 0.3) 50%,
//     rgba(255, 255, 255, 0.1) 100%
//   );
//   background-size: 200% 100%;
//   animation: shimmer 2s infinite linear;
//   border-radius: 8px; /* 필요에 따라 모서리 반경 조정 */

//   @keyframes shimmer {
//     0% {
//       background-position: 200% 0;
//     }
//     100% {
//       background-position: 0 0;
//     }
//   }
// `

const UserReviewWrapper = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -24px; /* 그리드 간격 조정 */
    width: auto; /* 자동 너비 */
  }

  .my-masonry-grid_column {
    padding-left: 24px; /* 각 열의 간격 */
    background-clip: padding-box; /* 배경 클립 */
  }
`
const UserReviewBox = styled.div`
  margin-bottom: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #494949;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`

const ReviewImgBox = styled.span`
  display: block;
`
const ReviewImg = styled.img`
  width: 100%;
`

const ReviewInfoBox = styled.div`
  padding: 1.2rem;
`
const ReviewUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserInfoHolder = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
const UserInfoBox = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`
const UserId = styled.span`
  font-size: 1.6rem;
`
const CreationDate = styled.span`
  font-size: 1.2rem;
`

const ReviewTitle = styled.p`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
`
const ReviewContent = styled.p`
  margin-top: 0.8rem;
  font-size: 1.6rem;
  line-height: 1.25;
`
const LoadReview = styled.div`
  height: 8rem;
`
