import {
  SelectBodyWrapper,
  SelectBoxCol,
  SelectBoxRow,
  SelectLineBox,
  SelectTime,
} from './SelectBody.style'
import BNextButton from './ui/BNextButton'
import SelectLocations from './ui/SelectLocations'
import SelectMovies from './ui/SelectMovies'
import SelectTheaters from './ui/SelectTheaters'
import SelectTitle from './ui/SelectTitle'
import TimeButton from './ui/TimeButton'

const SelectBody = () => {
  return (
    <SelectBodyWrapper>
      <SelectBoxRow>
        <SelectMovies />
        <SelectBoxCol>
          <SelectLocations />
          <SelectTheaters />
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTime>
        <SelectTitle title='시간선택' />
        <SelectLineBox>
          <TimeButton time='12:00' />
        </SelectLineBox>
      </SelectTime>

      <BNextButton />
    </SelectBodyWrapper>
  )
}

export default SelectBody
