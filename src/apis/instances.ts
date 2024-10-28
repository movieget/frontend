import axios from 'axios'
import { KAKAO_BASE_URL, TOSS_BASE_URL } from '../utils/constants'

// axios.defaults.withCredentials = true

export const client = axios.create({
  // baseURL: 'https://movieget.kprolabs.space/',
  baseURL: 'http://localhost:5173',
})

export const kakao = axios.create({
  baseURL: KAKAO_BASE_URL,
})

export const toss = axios.create({
  baseURL: TOSS_BASE_URL,
})
