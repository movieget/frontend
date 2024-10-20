import styled from 'styled-components'
import CheckboxTextUnChecked from '../../assets/svg/checkbox_unchecked.svg'
import CheckboxTextChecked from '../../assets/svg/checkbox_checked.svg'
import HeartUnChecked from '../../assets/svg/heart_unchecked.svg'
import HeartChecked from '../../assets/svg/heart_checked.svg'
import SeatUnchecked from '../../assets/svg/seat_unchecked.svg'
import SeatChecked from '../../assets/svg/seat_checked.svg'
import SeatDisabled from '../../assets/svg/seat_disabled.svg'

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
    background: no-repeat 50% 50% / 2.6rem;
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
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50% / 100%;
    background-image: url(${HeartUnChecked});
  }

  ${Checkbox}:checked + &::before {
    background-image: url(${HeartChecked});
  }
`
export const CheckHeartCount = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  width: auto;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: #292929;
  border: 1px solid #3f3f3f;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background: no-repeat 50% 50% / 100%;
    background-image: url(${HeartUnChecked});
  }

  ${Checkbox}:checked + &::before {
    background-image: url(${HeartChecked});
  }
`

//seat
export const CheckSeat = styled.label`
  display: inline-block;
  width: 2rem;
  height: 1.8rem;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50% / 100%;
    background-image: url(${SeatUnchecked});
  }
  ${Checkbox}:checked + &::before {
    background-image: url(${SeatChecked});
  }
  ${Checkbox}:disabled + &::before {
    background-image: url(${SeatDisabled});
    cursor: initial;
  }
`
