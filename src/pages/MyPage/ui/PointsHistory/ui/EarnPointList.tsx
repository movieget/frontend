import { useState } from 'react'
import { PointText, PointTextBox, PointTextLi, PointTitle, PointTitleBox } from '../../../style'
import { EPriod, IGetUsedPointInfoParams, PointStack } from '../pointsHistory.type'
import { client } from '../../../../../apis/instances'
import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '../../../../../stores/userStore'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { LineMdAlertLoop } from '../../../../../assets/svg/LineMdAlertLoop'
import { commonColors } from '../../../../../styles/theme'
import { MainBtn } from '../../../../../components/Button/style'

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

const getUsedPointStackInfo = async ({ userId, period }: IGetUsedPointInfoParams) => {
  try {
    const res = await client.get(`user/point/stack/${userId}?period=${period}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err) {
    throw err
  }
}

const EarnPointList = () => {
  const [filterOption, setFilterOption] = useState<EPriod>(EPriod.today)
  const userId = useUserStore((state) => state.userData?.id)
  const { data, isLoading, isError, error, refetch } = useQuery<PointStack[]>({
    queryKey: ['pointStackInfo'],
    queryFn: () => getUsedPointStackInfo({ userId, period: filterOption }),
  })
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
        {isLoading && <SvgSpinner />}
        {isError && (
          <ErrorMsg>
            <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
            <span>{error.message}</span>
            <MainBtn $size='large' onClick={() => refetch()}>
              재시도
            </MainBtn>
          </ErrorMsg>
        )}
        {data?.map((item) => {
          return (
            <PointTextLi key={item.accumulation_date}>
              <PointText>{item.type}</PointText>
              <PointText>{item.accumulation_date.split('T')[0]}</PointText>
              <PointText>{item.movie_title}</PointText>
              <PointText>{item.points_earned}P</PointText>
              <PointText>{item.remaining_points}P</PointText>
            </PointTextLi>
          )
        })}
      </PointTextBox>
    </>
  )
}

export default EarnPointList
