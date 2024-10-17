const generateDates = () => {
  const today = new Date()
  const dates = []

  for (let i = 0; i < 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    // const formattedDate = date.toLocale
  }
}
