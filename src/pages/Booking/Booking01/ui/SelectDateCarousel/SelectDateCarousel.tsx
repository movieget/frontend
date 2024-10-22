import Slider from 'react-slick'
import { CarouselWrapper, SliderWrapper } from './SelectDateCarousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DateButton from './ui/DateButton'
import NextButton from './ui/NextButton'
import PrevButton from './ui/PrevButton'
import { generateDates } from '../../../../../utils/generateDates'
import { useState } from 'react'

const SelectDateCarousel = () => {
  const dates = generateDates()
  const today = new Date().getDate().toString().padStart(2, '0')
  const [isSelected, setIsSelected] = useState(dates[0])

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

  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          {dates.map((el, idx) => (
            <DateButton
              key={idx}
              dateNumber={el}
              today={today}
              isSelected={isSelected === el}
              setIsSelected={setIsSelected}
            />
          ))}
        </Slider>
      </SliderWrapper>
    </CarouselWrapper>
  )
}

export default SelectDateCarousel
