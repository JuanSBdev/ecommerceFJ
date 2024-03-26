import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 2,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),

  count:0,
  increaseCount: () => set((state)=>({count: state.count + 1})) 
}))

export default useStore;