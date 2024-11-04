import { create } from 'zustand'

interface SeatStore {
  rows: any[]
  setRows: (newRows: any[]) => void
}

export const useSeatStore = create<SeatStore>((set) => ({
  rows: [],
  setRows: (newRows) => set({ rows: newRows }),
}))
