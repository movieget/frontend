import axios from 'axios'
import { KAKAO_BASE_URL } from '../utils/constants'

axios.defaults.withCredentials = true

export const client = axios.create({
  baseURL: 'https://movieget.kprolabs.space/api/v1',
  // baseURL: 'http://localhost:5173',
  // baseURL: 'http://43.203.250.46:8000',
})

export const kakao = axios.create({
  baseURL: KAKAO_BASE_URL,
})
