import styled from 'styled-components'
import { SelectBoxCol, SelectBoxRow } from '../Booking01/ui/SelectBody/SelectBody.style'
import ResultAside from './ui/ResultAside/ResultAside'
import SelectPeopleHeader from './ui/SelectPeopleHeader/SelectPeopleHeader'
import SelectSeatBody from './ui/SelectSeatBody/SelectSeatBody'

const Booking02 = () => {
  return (
    <>
      <BoxRow>
        <BoxCol>
          <SelectPeopleHeader />
          <SelectSeatBody />
        </BoxCol>
        <ResultAside />
      </BoxRow>
    </>
  )
}

export default Booking02

const BoxRow = styled(SelectBoxRow)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoxCol = styled(SelectBoxCol)`
  flex: 2;
`
