import { client } from './instances'

export const fetchMovieData = async (date: string) => {
  const formattedDate = date.slice(0, 10)
  try {
    const res = await client.get(`/api/v1/book/screens?date=${formattedDate}`)
    const data = await res.data
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }
}
