import Slider from 'react-slick'
import { CarouselWrapper, SliderWrapper } from './SelectDateCarousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DateButton from './ui/DateButton'
import NextButton from './ui/NextButton'
import PrevButton from './ui/PrevButton'
import { generateDates } from '../../../../../utils/generateDates'
import { useBookingStore } from '../../../../../stores/store'

const SelectDateCarousel = () => {
  const dates = generateDates()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }

  const today = new Date().getDate().toString().padStart(2, '0')

  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {dates.map((el, idx) => (
            <DateButton key={idx} dateNumber={el} today={today} />
          ))}
        </Slider>
      </SliderWrapper>
    </CarouselWrapper>
  )
}

export default SelectDateCarousel
