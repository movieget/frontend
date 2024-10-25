import { useMemo } from 'react'

interface Seat {
  id: string
  status: boolean | null
}

interface Row {
  id: string
  seat: Seat[]
}

/**
 * 예약 가능한 좌석의 갯수를 세어주는 훅
 * @param rows
 * @returns number
 */
export const useSeatCounter = (rows: Row[]) => {
  // useMemo를 사용하여 최적화
  const availableSeatCount = useMemo(() => {
    return rows.reduce((total, row) => {
      const trueSeatsInRow = row.seat.filter((seat) => seat.status === true).length
      return total + trueSeatsInRow
    }, 0)
  }, [rows])

  return availableSeatCount
}
