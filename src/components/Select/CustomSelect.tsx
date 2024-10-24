import React, { useEffect, useRef, useState } from 'react'
import { CustomSelectBox, Option, Select, SelectButton, SelectLi, SelectUl } from './style'

interface CustomSelectProps {
  items?: string[]
  $direction?: 'left' | 'right'
}

const CustomSelect: React.FC<CustomSelectProps> = ({ items, $direction }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('선택하기')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleItemClick = (item: string) => {
    setSelectedValue(item) // 선택된 값 업데이트
    setIsOpen(false) // 리스트 닫기
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value) // 선택된 값 업데이트
    setIsOpen(false) // 리스트 닫기
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
      <Select value={selectedValue} onChange={handleSelectChange}>
        {items.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </CustomSelectBox>
  )
}

export default CustomSelect
