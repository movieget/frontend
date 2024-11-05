import { useState } from 'react'

// 사용자 평점을 관리하는 훅
const useRating = (initialRating: number = 0) => {
  const [rating, setRating] = useState<number>(initialRating) // 평점 상태 정의

  // 평점 변경 함수
  const handleRatingChange = (newRating: number) => {
    setRating(newRating) // 새로운 평점으로 상태 업데이트
  }

  return { rating, handleRatingChange } // 현재 평점과 변경 함수를 반환
}

export default useRating
