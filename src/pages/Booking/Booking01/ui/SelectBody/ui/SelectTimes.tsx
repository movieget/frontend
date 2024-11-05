import { useEffect, useState } from 'react'
import SelectTitle from './SelectTitle'
import TimeButton from './TimeButton'
import { ISelectTimesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
import { useBookingStore } from '../../../../../../stores/store'
import styled from 'styled-components'

const SelectTimes = ({ setIsTimeSelected, screenings, isValid, date }: ISelectTimesProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('startTime', '')
    setField('screenId', '')
    setField('screeningDate', '')
    setField('screenInfoId', '')
    setSelectedId(null)
    setIsTimeSelected(false)
  }, [date])

  // screen_id 별로 그룹화
  const groupedScreenings = screenings?.reduce((acc: any, screening: any) => {
    const { screen_id } = screening
    if (!acc[screen_id]) {
      acc[screen_id] = []
    }
    acc[screen_id].push(screening)
    return acc
  }, {})

  return (
    <BS1.SelectTime>
      <SelectTitle title='시간선택' />
      <BS1.SelectLineBox>
        {isValid ? (
          Object.keys(groupedScreenings).map((screenId) => (
            <ScreeningGroup key={screenId}>
              <GroupTitle>상영관 {screenId}</GroupTitle>
              <TimeBtnWrapper>
                {groupedScreenings[screenId].map((el: any) => (
                  <TimeButton
                    key={el.id}
                    id={el.id}
                    screenInfoId={el.id}
                    screenId={el.screen_id}
                    screeningDate={el.screening_date}
                    time={el.start_time.substring(0, 5)}
                    selectedId={selectedId === el.id}
                    setSelectedId={setSelectedId}
                    setIsTimeSelected={setIsTimeSelected}
                    onSelect={handleSelectButton}
                  />
                ))}
              </TimeBtnWrapper>
            </ScreeningGroup>
          ))
        ) : (
          <NoSelectionMessage>원하시는 영화, 지역, 영화관을 선택해주세요</NoSelectionMessage>
        )}
      </BS1.SelectLineBox>
    </BS1.SelectTime>
  )
}

export default SelectTimes

// 스타일 정의
const ScreeningGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_normal};
`

const TimeBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const GroupTitle = styled.h3`
  width: 5%;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_in_box};
  margin-bottom: 1rem;
`

const NoSelectionMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #999;
  font-size: 1.4rem;
`
