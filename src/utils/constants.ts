// OURS
export const API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = import.meta.env.VITE_API_URL
export const IMG_URL = import.meta.env.VITE_IMG_URL

// KAKAO
export const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY
export const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL
export const KAKAO_AUTH_BASE_URL = import.meta.env.VITE_KAKAO_AUTH_BASE_URL
export const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI // 크게 필요없는 부분
export const KAKAO_AUTH_URI = `${KAKAO_AUTH_BASE_URL}?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`

// TOSS
export const TOSS_API_KEY = import.meta.env.VITE_TOSS_API_KEY
export const TOSS_CUSTOMER_KEY = import.meta.env.VITE_TOSS_CUSTOMER_KEY
