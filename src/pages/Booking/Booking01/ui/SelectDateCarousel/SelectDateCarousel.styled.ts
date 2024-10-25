import styled from 'styled-components'

/* ---------- Carousel Style ------------- */

export const CustomArrow = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextBtn = styled(CustomArrow)``

export const PrevBtn = styled(CustomArrow)`
  transform: rotate(-180deg);
`

export const DateBtn = styled(CustomArrow)<{ $week: string; $isSelected: boolean }>`
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

export const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  padding: 0 1.8rem;
  position: relative;
`

export const CarouselWrapper = styled(StyledWrapper)`
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

export const SliderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 1.8rem;
  height: 120px;
`

export const Day = styled.p`
  font-family: inherit;
  white-space: nowrap;
`

/* ------------------------------------- */
