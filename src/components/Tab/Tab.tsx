import React, { useState } from 'react'
import { TabButton, TabButtonBox, TabContainer, TabContentsBox } from './style'

interface ButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <TabButton isActive={isActive} onClick={onClick}>
      {label}
    </TabButton>
  )
}

interface TabsProps {
  tabs: string[]
  contents: React.ReactNode[]
}

const Tabs: React.FC<TabsProps> = ({ tabs, contents }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <TabContainer>
      <TabButtonBox>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            label={tab}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </TabButtonBox>
      <TabContentsBox>{contents[activeIndex]}</TabContentsBox>
    </TabContainer>
  )
}

export default Tabs
