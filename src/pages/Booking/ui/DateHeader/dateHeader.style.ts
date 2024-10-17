import styled from 'styled-components'
import { ICalendarBoxProps, ICalendarBtnProps, IWrapperProps } from './dateHeader.type.ts'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 4rem;
  gap: 1.2rem;
`

export const Wrapper = styled.article<IWrapperProps>`
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
`

export const NextBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PrevBtn = styled(NextBtn)`
  transform: rotate(180deg);
`

export const CalendarWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const SlideBox = styled.div<ICalendarBoxProps>`
  display: flex;
  gap: 1.8rem;
  transform: ${({ $slidePosition }) => `translateX(${$slidePosition}px)`};
  transition: transform 0.2s ease;
`

export const CalendarBtn = styled(NextBtn)<ICalendarBtnProps>`
  min-width: 50px;
  font-family: inherit;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ $week, theme }) =>
    $week === '일' ? theme.colors.error : $week === '토' ? '#007BFF' : theme.colors.text};
  border-radius: 4px;

  span {
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_btn_normal};
  }
`
