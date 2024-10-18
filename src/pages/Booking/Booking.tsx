import styled from 'styled-components'
import { Container } from './booking.style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { generateDates } from '../../utils/generateDates'
import NextButton from './ui/NextButton'
import PrevButton from './ui/PrevButton'
import { DateButton } from './ui/ui.style'
import { Badge } from '../../components/Badge/style'

const Booking = () => {
  const dates = generateDates()
  const settings = {
    dots: false,
    infinite: false, // 무한 스크롤 여부
    speed: 500, // 슬라이드 속도
    slidesToShow: 13, // 한 화면에 보여질 슬라이드 개수
    slidesToScroll: 4, // 한 번에 스크롤되는 슬라이드 개수
    arrows: true, // 좌우 화살표 표시 여부
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }

  return (
    <Container>
      <CarouselWrapper>
        <SliderWrapper>
          <Slider {...settings}>
            {dates.map((date, idx) => {
              const [year, month, day, weekday] = date.split('-')
              return (
                <>
                  <DateButton key={idx} $week={weekday}>
                    <Badge color='primary'>{`${year}.${month}`}</Badge>
                    <Day>{`${day} ${weekday}`}</Day>
                  </DateButton>
                </>
              )
            })}
          </Slider>
        </SliderWrapper>
      </CarouselWrapper>
    </Container>
  )
}

export default Booking

const CarouselWrapper = styled.div`
  width: 100%;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  padding: 0 1.8rem;
  position: relative;

  .slick-list {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .slick-slider {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .slick-track {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`

const SliderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 1.8rem;
  height: 100px;
`
const Day = styled.p`
  font-family: inherit;
  white-space: nowrap;
`
