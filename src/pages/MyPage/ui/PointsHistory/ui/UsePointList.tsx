import { useState } from 'react'
import { PointText, PointTextBox, PointTextLi, PointTitle, PointTitleBox } from '../../../style'
import { client } from '../../../../../apis/instances'
import { useUserStore } from '../../../../../stores/userStore'
import { useQuery } from '@tanstack/react-query'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { LineMdAlertLoop } from '../../../../../assets/svg/LineMdAlertLoop'
import { commonColors } from '../../../../../styles/theme'
import { MainBtn } from '../../../../../components/Button/style'
import { EPriod, IGetUsedPointInfoParams, Point } from '../pointsHistory.type'

const getUsedPointInfo = async ({ userId, period }: IGetUsedPointInfoParams) => {
  try {
    const res = await client.get(`user/point/use/${userId}?period=${period}`, {
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

const UsePointList = () => {
  const [filterOption, setFilterOption] = useState<EPriod>(EPriod.today)
  const userId = useUserStore((state) => state.userData?.id)
  const { data, isLoading, isError, error, refetch } = useQuery<Point[]>({
    queryKey: ['usedPointInfo'],
    queryFn: () => getUsedPointInfo({ userId, period: filterOption }),
    enabled: !!userId,
  })

  return (
    <>
      <PointTitleBox>
        <PointTitle>영화</PointTitle>
        <PointTitle>이용 날짜</PointTitle>
        <PointTitle>이용 내역</PointTitle>
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
        {data &&
          data?.map((item) => {
            return (
              <PointTextLi key={item.booking_code}>
                <PointText>{item.movie_title}</PointText>
                <PointText>{item.usage_date.split('T')[0]}</PointText>
                <PointText>{item.used_points}P</PointText>
                <PointText>{item.remaining_points}P</PointText>
              </PointTextLi>
            )
          })}
      </PointTextBox>
    </>
  )
}

export default UsePointList
