export interface IArrowButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IDateButtonProps {
  dateNumber: string
  today: string
  isSelected: boolean
  setIsSelected: any
}
