// src/shared/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      success: string
      warning: string
      error: string
      text_in_box: string
      bg_btn_normal: string
      bg_btn_disabled: string
      bg_btn_purple: string
      bg_btn_orange: string
      border_disabled: string
      border_normal: string
      border_purple: string
      border_orange: string
      border_wrapper: string
      bg_kakao: string
      text_kakao: string
      bg_naver: string
      bg: string
      bg_wrapper: string
      text: string
    }
    fonts: {
      weight: {
        bold: number
        light_bold: number
        regular: number
        thin: number
        light_thin: number
      }
    }
  }
}
