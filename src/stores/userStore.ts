import { create } from 'zustand'

type UserData = {
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

// export const useUserStore = create<IfUserState>((set) => ({
//   accessToken: null,
//   userId: null,
//   profileImg: null,
//   setUser: (accessToken, userId, profileImg) => set({ accessToken, userId, profileImg }),
//   clearUser: () => set({ accessToken: null, userId: null, profileImg: null }),
// }))
