import styled from 'styled-components'

/* ---------- Select Date Carousel Style ------------- */

const CustomBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PrevBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-180deg);
`

const DateBtn = styled(CustomBtn)<{ $week: string; $isSelected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  padding: 1.2rem 1.8rem;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ $week, theme }) =>
    $week === '일' ? theme.colors.error : $week === '토' ? '#007BFF' : theme.colors.text};
  border-radius: 4px;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? `${theme.colors.bg_btn_normal}` : 'transparent'};
  span {
    position: absolute;
    top: -3.2rem;
    font-family: inherit;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_btn_normal};
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  padding: 0 1.8rem;
  position: relative;
`

const CarouselWrapper = styled(StyledWrapper)`
  height: 64px;

  .slick-list {
    height: 100%;
    padding: 1rem 1rem;
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
  height: 120px;
`

const Day = styled.p`
  font-family: inherit;
  white-space: nowrap;
`

/* ---------------------------------------------- */

/* ------------ Select Body Styles -------------- */

const SelectBodyWrapper = styled.div`
  width: 100%;
  height: 74rem;
  padding: 8rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
`
const SelectBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border_normal};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg_box};
  overflow: auto;
`

const SelectLineBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_wrapper};

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.text_disabled};
    }
  }
`

const SelectList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 1.2;
`

const OptionButtonStyle = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  padding: 0.8rem 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.text_in_box};
  border: none;
  border-radius: 4px;
  background: ${({ $isSelected, theme }) => {
    if ($isSelected) {
      return theme.colors.bg_btn_purple
    }
    return 'transparent'
  }};

  &:hover {
    background: ${({ $isSelected, theme }) => {
      if ($isSelected) {
        return theme.colors.bg_btn_purple
      }
      return theme.colors.border_normal
    }};
    border-color: ${({ $isSelected, theme }) => {
      if ($isSelected) {
        return theme.colors.border_purple
      }
      return theme.colors.border_wrapper
    }};
  }
`
const OptionLabel = styled.span`
  font-size: 1.6rem;
`

const SelectBoxCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SelectBoxRow = styled.div`
  display: flex;
  gap: 2rem;
  max-height: 30rem;
  min-height: 30rem;
`

const SelectMovie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`
const SelectLocation = styled(SelectMovie)`
  flex: 1;
`
const SelectTheater = styled(SelectMovie)`
  flex: 1;
`
const SelectTime = styled(SelectMovie)``

const SelectTitleStyle = styled.h2`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`

const NextBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`

const MsgBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text_disabled};
`

/* ---------------------------------------------- */

const BS1 = {
  CustomBtn,
  PrevBtn,
  DateBtn,
  StyledWrapper,
  CarouselWrapper,
  SliderWrapper,
  Day,
  SelectBodyWrapper,
  SelectBox,
  SelectLineBox,
  SelectList,
  OptionButtonStyle,
  OptionLabel,
  SelectBoxCol,
  SelectBoxRow,
  SelectMovie,
  SelectLocation,
  SelectTheater,
  SelectTime,
  SelectTitleStyle,
  NextBtnWrapper,
  MsgBoxStyle,
}

export default BS1
