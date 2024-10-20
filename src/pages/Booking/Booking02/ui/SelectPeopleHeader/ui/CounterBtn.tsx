import { IconBtn, IconBtnImg } from '../../../../../../components/Button/style'
import plusIco from '../../../../../../assets/svg/ic--round-add.svg'
import minusIco from '../../../../../../assets/svg/ic--round-minus.svg'

interface CounterBtnProps {
  ico: 'plus' | 'minus' // 아이콘 타입을 명확히 제한
}

const CounterBtn = ({ ico }: CounterBtnProps) => {
  // ico 값이 'plus'이면 plusIco, 'minus'이면 minusIco
  const iconSrc = ico === 'plus' ? plusIco : minusIco

  return (
    <IconBtn>
      <IconBtnImg src={iconSrc} alt={ico === 'plus' ? '더하기' : '빼기'} width='2rem' />
    </IconBtn>
  )
}

export default CounterBtn
