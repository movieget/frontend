import Slider from 'react-slick'
import { generateDates } from '../../../../utils/generateDates'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import { CarouselWrapper, SliderWrapper } from './SelectDateCarousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DateButton from './DateButton'

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

  const handleSelectDay = (date: string) => {
    const formattedDate = date.slice(0, 10)
    console.log(formattedDate)
    return formattedDate
  }

  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {dates.map((date) => (
            <DateButton key={date} date={date} today={today} onSelect={handleSelectDay} />
          ))}
        </Slider>
      </SliderWrapper>
    </CarouselWrapper>
  )
}

export default SelectDateCarousel
