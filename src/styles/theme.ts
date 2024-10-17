// src/shared/styles/theme.ts
import { DefaultTheme } from 'styled-components'

// 공통 스타일 정의
export const commonFonts = {
  weight: {
    bold: 900,
    light_bold: 700,
    regular: 500,
    thin: 300,
    light_thin: 200,
  },
}

export const commonColors = {
  primary: '#733FF1',
  success: '##2CE003',
  warning: '##FFAA00',
  error: '##F22421',
  text_in_box: '#FDFDFD',
  bg_btn_normal: '#353535',
  bg_btn_disabled: '#4B4B4B',
  bg_btn_purple: '#733FF1',
  bg_btn_orange: '#F45917',
  border_disabled: '#909090',
  border_normal: '#3F3F3F',
  border_purple: '#8D70CD',
  border_orange: '#FF8B59',
  border_wrapper: '#474747',
  bg_kakao: '#FEE500',
  text_kakao: '#3D1D1D',
  bg_naver: '#03C75A',
}

const lightTheme: DefaultTheme = {
  colors: {
    ...commonColors,
    bg: '#FDFDFD',
    bg_wrapper: '#EDEDED',
    text: '#0A0A0A',
  },
  fonts: commonFonts,
}

const darkTheme: DefaultTheme = {
  colors: {
    ...commonColors,
    bg: 'linear-gradient(0deg, rgba(100,34,242,1) 0%, rgba(10,10,10,1) 40%)',
    bg_wrapper: '#1B1B1B',
    text: '#FDFDFD',
  },
  fonts: commonFonts,
}

const theme = {
  light: lightTheme,
  dark: darkTheme,
}

export default theme
