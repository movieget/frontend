import styled from 'styled-components'
import SelectArrow from '../../assets/svg/select_arrow.svg'

export const CustomSelectBox = styled.div`
  display: inline-block;
  position: relative;
`

export const SelectButton = styled.button`
  min-width: 8.8rem;
  height: 3.2rem;
  padding: 0 3.2rem 0 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  background: linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb);

  border: 1px solid #9d7ce5;
  border-radius: 0.4rem;
  color: #fdfdfd;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2.4rem;
    height: 3.2rem;
    background: url(${SelectArrow}) no-repeat 50% 50% / 2.4rem;
    border-left: 1px solid #9d7ce5;
  }
`

interface IOptionAlignProps {
  $direction?: 'left' | 'right'
}

export const SelectUl = styled.ul<IOptionAlignProps>`
  position: absolute;
  ${({ $direction }) => `
    ${$direction}: 0;
  `}
  top: calc(100% + 0.6rem);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 14rem;
  padding: 1.2rem 0.6rem;
  text-align: left;
  background-color: #292929;
  border: 1px solid #f5f5f5;
  border-radius: 0.4rem;
  z-index: 1000;
`

export const SelectLi = styled.li`
  padding: 0 0.4rem;
  font-size: 1.2rem;
  line-height: 2.4rem;
  white-space: nowrap;
  border-radius: 0.4rem;
  color: #fdfdfd;
  cursor: pointer;

  &:hover {
    background-color: #3b3b3b;
  }

  &.selected {
    background-color: #3b3b3b; /* 선택된 항목 강조 */
  }
`

export const Select = styled.select`
  display: none; /* 숨김 */
`

export const Option = styled.option``
