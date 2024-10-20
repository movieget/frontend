import { useState } from 'react'
import { PointText, PointTextBox, PointTextLi, PointTitle, PointTitleBox } from '../../../style'

interface Point {
  id: number
  title: string
  usePointDate: string
  usedPoint: number
  remainingPoints: number
}

const dummyData: Point[] = [
  {
    id: 0,
    title: '크라벤',
    usePointDate: '2024-10-13',
    usedPoint: 200,
    remainingPoints: 1200,
  },
  {
    id: 1,
    title: '다크나이트',
    usePointDate: '2024-10-12',
    usedPoint: 200,
    remainingPoints: 1000,
  },
]

const UsePoint = () => {
  const [usePoint, setUsePoint] = useState<Point[]>(dummyData)
  return (
    <>
      <PointTitleBox>
        <PointTitle>영화</PointTitle>
        <PointTitle>이용 날짜</PointTitle>
        <PointTitle>이용 내역</PointTitle>
        <PointTitle>남은 포인트</PointTitle>
      </PointTitleBox>
      <PointTextBox>
        {usePoint?.map((item) => {
          return (
            <PointTextLi>
              <PointText>{item.title}</PointText>
              <PointText>{item.usePointDate}</PointText>
              <PointText>{item.usedPoint}P</PointText>
              <PointText>{item.remainingPoints}P</PointText>
            </PointTextLi>
          )
        })}
      </PointTextBox>
    </>
  )
}

export default UsePoint
