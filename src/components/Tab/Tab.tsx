import React, { useState } from 'react'
import { TabButton, TabButtonBox, TabButtonWrapper, TabContainer, TabContentsBox } from './style'
import CustomSelect from '../Select/CusomSelect'

interface ButtonProps {
  $label: string
  $isActive: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ $label, $isActive, onClick }) => {
  return (
    <TabButton $isActive={$isActive} onClick={onClick}>
      {$label}
    </TabButton>
  )
}

interface TabsProps {
  tabs: string[]
  contents: React.ReactNode[]
  isSelect: boolean
}

const Tabs: React.FC<TabsProps> = ({ tabs, contents, isSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <TabContainer>
      <TabButtonWrapper>
        <TabButtonBox>
          {tabs.map((tab, index) => (
            <Button
              key={index}
              $label={tab}
              $isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </TabButtonBox>
        {isSelect && (
          <CustomSelect items={['바나나', '원숭이', '사나움사나움사나움']} $direction='right' />
        )}
      </TabButtonWrapper>
      <TabContentsBox>{contents[activeIndex]}</TabContentsBox>
    </TabContainer>
  )
}

export default Tabs
