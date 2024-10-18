export const generateDates = () => {
  const today = new Date()
  const dates = []

  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  for (let i = 0; i < 24; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const weekday = dayNames[date.getDay()]

    const formattedDate = `${year}-${month}-${day}-${weekday}`

    dates.push(formattedDate)
  }

  return dates
}
