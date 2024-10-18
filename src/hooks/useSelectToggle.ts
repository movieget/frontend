import { useState } from 'react'

const useSelectToggle = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const toggle = () => setIsOpen((prev) => !prev)
  return [isOpen, toggle] as const
}

export default useSelectToggle
