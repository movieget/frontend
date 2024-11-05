export const formatLikes = (likes: number | string): string => {
  // 입력이 string인 경우 number로 변환
  const likesNumber = typeof likes === 'string' ? parseInt(likes, 10) : likes

  // likes가 유효한 숫자인지 확인
  if (isNaN(likesNumber)) {
    return '0' // 유효하지 않은 경우 기본값 처리
  }

  if (likesNumber >= 1000) {
    return (likesNumber / 1000).toFixed(1) + 'k'
  }

  return likesNumber.toString()
}
