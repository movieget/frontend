import { generateDates } from '../../../../utils/generateDates'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const DateHeader = () => {
  const dates = generateDates()

  return <CarouselWrapper></CarouselWrapper>
}

export default DateHeader

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 74px;
`
