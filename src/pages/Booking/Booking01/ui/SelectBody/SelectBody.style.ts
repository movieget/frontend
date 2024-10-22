import styled from 'styled-components'

export const SelectBodyWrapper = styled.div`
  width: 100%;
  height: 74rem;
  padding: 8rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
`
export const SelectBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  gap: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border_box};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bg_box};
  overflow-y: scroll;
`

export const SelectLineBox = styled.ul`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_wrapper};
`

export const SelectList = styled.li`
  width: 100%;
  padding: 0.6rem 0.2rem;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: 1.2;
  gap: 1rem;
`

export const OptionButtonStyle = styled.button`
  width: 100%;
  padding: 0.8rem 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.text_in_box};
  border: none;
  border-radius: 4px;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_btn_normal};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.bg_btn_purple};
  }
`
export const OptionLabel = styled.span`
  font-size: 1.6rem;
`

export const SelectBoxCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SelectBoxRow = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  max-height: 30rem;
`

export const SelectMovie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const SelectLocation = styled(SelectMovie)`
  flex: 1;
`
export const SelectTheater = styled(SelectMovie)`
  flex: 1;
`
export const SelectTime = styled(SelectMovie)``

export const SelectTitleStyle = styled.h2`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`

export const NextBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`
