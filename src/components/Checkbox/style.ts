import styled from 'styled-components'
import CheckboxTextUnChecked from '../../assets/svg/checkbox_unchecked.svg'
import CheckboxTextChecked from '../../assets/svg/checkbox_checked.svg'
import HeartUnChecked from '../../assets/svg/heart_unchecked.svg'
import HeartChecked from '../../assets/svg/heart_checked.svg'

// checkbox
export const CheckboxWrapper = styled.span``
export const Checkbox = styled.input`
  display: none;
`

export const CheckText = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 2.6rem;
    height: 2.6rem;
    background: no-repeat 50% 50%;
    background-image: url(${CheckboxTextUnChecked});
  }

  ${Checkbox}:checked + &::before {
    background-image: url(${CheckboxTextChecked});
  }
`
export const CheckHeart = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background: no-repeat 50% 50%;
    background-image: url(${HeartUnChecked});
  }

  ${Checkbox}:checked + &::before {
    background-image: url(${HeartChecked});
  }
`
