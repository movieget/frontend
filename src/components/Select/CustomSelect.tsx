import React, { useEffect, useRef, useState } from 'react'
import { CustomSelectBox, SelectButton, SelectLi, SelectUl } from './style'

interface CustomSelectProps {
  items?: string[]
  $direction?: 'left' | 'right'
  onSelect?: (value: string) => void // 선택된 값을 부모로 전달하기 위한 props
}

const CustomSelect: React.FC<CustomSelectProps> = ({ items = [], $direction, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('선택하기')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleItemClick = (item: string) => {
    setSelectedValue(item)
    setIsOpen(false)
    if (onSelect) onSelect(item) // 선택된 값을 부모로 전달
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false) // 외부 클릭 시 리스트 닫기
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <CustomSelectBox ref={dropdownRef}>
      <SelectButton onClick={() => setIsOpen((prev) => !prev)}>{selectedValue}</SelectButton>
      {isOpen && (
        <SelectUl $direction={$direction}>
          {items.map((item) => (
            <SelectLi
              key={item}
              onClick={() => handleItemClick(item)}
              className={item === selectedValue ? 'selected' : ''}
            >
              {item}
            </SelectLi>
          ))}
        </SelectUl>
      )}
    </CustomSelectBox>
  )
}

export default CustomSelect
