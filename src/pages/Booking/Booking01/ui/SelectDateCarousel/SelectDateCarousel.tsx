import Slider from 'react-slick'
import BS1 from '../../Booking01.styled'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DateButton from './ui/DateButton'
import { generateDates } from '../../../../../utils/generateDates'
import { useState } from 'react'
import NextButton from './ui/NextButton'
import PrevButton from './ui/PrevButton'

const SelectDateCarousel = () => {
  const dates = generateDates()
  const today = new Date().getDate().toString().padStart(2, '0')
  const [isSelected, setIsSelected] = useState(dates[0])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }

  return (
    <BS1.CarouselWrapper>
      <BS1.SliderWrapper>
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
      </BS1.SliderWrapper>
    </BS1.CarouselWrapper>
  )
}

export default SelectDateCarousel
