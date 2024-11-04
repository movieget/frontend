import { create } from 'zustand'

export type UserData = {
  access_token: string
  id: string
  profile_image_url: string
}

interface IUserDataState {
  userData: UserData | null
  initializeUser: () => void
  setIsLogin: (status: UserData) => void
  setLogout: () => void
}

export const useUserStore = create<IUserDataState>((set) => ({
  userData: null,
  initializeUser: () => {
    const savedUserData = localStorage.getItem('USER_DATA')
    if (savedUserData) {
      set({ userData: JSON.parse(savedUserData) })
    }
  },
  setIsLogin: (status) => {
    localStorage.setItem('USER_DATA', JSON.stringify(status))
    set({ userData: status })
  },
  setLogout: () => {
    localStorage.removeItem('USER_DATA')
    set({ userData: null })
  },
}))

type UserInfo = {
  kakao_id: number
  nickname: string
  email: string
  username: string
  birthday: string
  phone_number: string
  oauth_provider: string
}

interface IUserInfoState {
  userInfo: UserInfo | null
  fetchInfo: (status: UserInfo) => void
}

// 회원정보가져오기, 회원정보수정, 회원탈퇴
export const useInfoStore = create<IUserInfoState>((set) => ({
  userInfo: null,
  fetchInfo: (status) => {
    set({ userInfo: status })
  },
}))
