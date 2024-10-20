import styled from 'styled-components'

const MyMovieStory = () => {
  return (
    <MyMovieStoryBox>
      <MyMovieStoryTitle>나의 무비스토리</MyMovieStoryTitle>
      <MyMovieStoryList>
        <MyMovieStoryLi>
          <ActivityCount>2</ActivityCount>
          <ActivityTitle>예매</ActivityTitle>
        </MyMovieStoryLi>
        <MyMovieStoryLi>
          <ActivityCount>4</ActivityCount>
          <ActivityTitle>본 영화</ActivityTitle>
        </MyMovieStoryLi>
        <MyMovieStoryLi>
          <ActivityCount>2</ActivityCount>
          <ActivityTitle>리뷰 수</ActivityTitle>
        </MyMovieStoryLi>
        <MyMovieStoryLi>
          <ActivityCount>4</ActivityCount>
          <ActivityTitle>찜한 영화</ActivityTitle>
        </MyMovieStoryLi>
      </MyMovieStoryList>
    </MyMovieStoryBox>
  )
}

export default MyMovieStory

const MyMovieStoryBox = styled.div`
  padding: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
const MyMovieStoryTitle = styled.h3`
  margin-bottom: rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`
const MyMovieStoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.8rem;
  margin-top: 3.2rem;
`
const MyMovieStoryLi = styled.li`
  text-align: center;
`
const ActivityCount = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
`
const ActivityTitle = styled.p`
  margin-top: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
`
