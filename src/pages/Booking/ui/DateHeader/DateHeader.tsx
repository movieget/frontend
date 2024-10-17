import { useEffect, useRef, useState } from 'react'
import { CalendarBtn, CalendarWrapper, Container, SlideBox, Wrapper } from './dateHeader.style'
import PrevButton from './PrevButton'
import { generateDates } from '../../../../utils/generateDates'
import NextButton from './NextButton'

const DateHeader = () => {
  const [slidePosition, setSlidePosition] = useState(0)
  const [btnWidths, setBtnWidths] = useState<number[]>([])
  const calendarRef = useRef<HTMLDivElement>(null)
  const gap = 18 // gap 값을 px로 설정

  const dates = generateDates()

  // 각 버튼의 너비를 계산하는 함수
  useEffect(() => {
    if (calendarRef.current) {
      const btnElements = Array.from(calendarRef.current.children) as HTMLElement[]
      const widths = btnElements.map((btn) => btn.offsetWidth)
      setBtnWidths(widths)
    }
  }, [])

  const handleSlidePrev = () => {
    if (slidePosition < 0) {
      const moveBy = (btnWidths[Math.abs(slidePosition / (btnWidths[0] + gap)) - 1] || 0) + gap
      setSlidePosition(slidePosition + moveBy)
    }
  }

  const handleSlideNext = () => {
    if (
      slidePosition >
      -(
        btnWidths.reduce((acc, width) => acc + width, 0) +
        (btnWidths.length - 1) * gap -
        calendarRef.current!.offsetWidth
      )
    ) {
      const moveBy = (btnWidths[Math.abs(slidePosition / (btnWidths[0] + gap))] || 0) + gap
      setSlidePosition(slidePosition - moveBy)
    }
  }
  return (
    <Container>
      <Wrapper $height={62}>
        <PrevButton handler={handleSlidePrev} />
        <CalendarWrapper>
          <SlideBox ref={calendarRef} $slidePosition={slidePosition}>
            {dates.map((date, idx) => {
              const [_, week] = date.split(' ')
              return (
                <CalendarBtn key={idx} $week={week}>
                  <span>{date}</span>
                </CalendarBtn>
              )
            })}
          </SlideBox>
        </CalendarWrapper>
        <NextButton handler={handleSlideNext} />
      </Wrapper>
    </Container>
  )
}

export default DateHeader
