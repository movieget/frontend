import { CheckSeat, Checkbox, CheckboxWrapper } from '../../../../../../components/Checkbox/style'

const Seats = () => {
  return (
    <>
      <CheckboxWrapper>
        <Checkbox type='checkbox' id='seat' />
        <CheckSeat htmlFor='seat' />
      </CheckboxWrapper>
    </>
  )
}

export default Seats

/* <Checkbox type='checkbox' id='disableSeat' disabled />
      <CheckSeat htmlFor='disableSeat' /> */
