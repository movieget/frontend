export const fetchFakeData = () => {
  return new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Fake data fetched successfully!' })
    }, 2000) // 2초 후에 데이터를 반환
  })
}
