export interface IArrowButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IDateButtonProps {
  date: string
  today: string
  onSelect: (date: string) => void
}
