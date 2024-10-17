export const generateDates = () => {
  const today = new Date()
  const dates = []

  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  for (let i = 0; i < 36; i++) {
    // 오늘 포함 2주 (14일)
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    const day = date.getDate().toString().padStart(2, '0')
    const weekday = dayNames[date.getDay()]

    const formattedDate = `${day} ${weekday}`

    dates.push(formattedDate)
  }

  return dates
}
