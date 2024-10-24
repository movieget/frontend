import { useState } from 'react'
import { PointText, PointTextBox, PointTextLi, PointTitle, PointTitleBox } from '../../../style'

interface Point {
  id: number
  division: string
  earnPointDate: string
  title: string
  earnedPoint: number
  remainingPoints: number
}

const dummyData: Point[] = [
  {
    id: 0,
    division: '리뷰 적립',
    earnPointDate: '2024-10-13',
    title: '크라벤',
    earnedPoint: 20,
    remainingPoints: 1200,
  },
  {
    id: 1,
    division: '예매 적립',
    earnPointDate: '2024-10-12',
    title: '다크나이트',
    earnedPoint: 40,
    remainingPoints: 1200,
  },
]

const EarnPointList = () => {
  const [earnPoint, setEarnPoint] = useState<Point[]>(dummyData)
  return (
    <>
      <PointTitleBox>
        <PointTitle>구분</PointTitle>
        <PointTitle>적립 날짜</PointTitle>
        <PointTitle>영화</PointTitle>
        <PointTitle>적립 포인트</PointTitle>
        <PointTitle>남은 포인트</PointTitle>
      </PointTitleBox>
      <PointTextBox>
        {earnPoint?.map((item) => {
          return (
            <PointTextLi key={item.id}>
              <PointText>{item.division}</PointText>
              <PointText>{item.earnPointDate}</PointText>
              <PointText>{item.title}</PointText>
              <PointText>{item.earnedPoint}P</PointText>
              <PointText>{item.remainingPoints}P</PointText>
            </PointTextLi>
          )
        })}
      </PointTextBox>
    </>
  )
}

export default EarnPointList
