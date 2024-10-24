import React, { useState } from 'react'
import {
  AddFeatureBtnBox,
  TabButton,
  TabButtonBox,
  TabButtonWrapper,
  TabContainer,
  TabContentsBox,
} from './style'
import CustomSelect from '../Select/CustomSelect'
import { BasicBtn } from '../Button/style'

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
  isAllDeleteBtn?: boolean
}

const Tabs: React.FC<TabsProps> = ({ tabs, contents, isSelect, isAllDeleteBtn }) => {
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
        <AddFeatureBtnBox>
          {isAllDeleteBtn && <BasicBtn $size='medium'>전체삭제</BasicBtn>}
          {isSelect && (
            <CustomSelect
              items={['전체', '당일', '주간', '월간', '최근 1년간']}
              $direction='right'
            />
          )}
        </AddFeatureBtnBox>
      </TabButtonWrapper>
      <TabContentsBox>{contents[activeIndex]}</TabContentsBox>
    </TabContainer>
  )
}

export default Tabs
