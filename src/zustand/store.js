import { create } from 'zustand'
import axios from 'axios'

const useStore = create((set) => ({
  products:[],
  setProductsApi: async ()=>{
    try {
      let response = await axios('https://fakestoreapi.com/products/');
      let data = response.data;

      set({ products: data})

    } catch (error) {
      console.log(error)
    }
  },
  bears: 2,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),

  count:0,
  increaseCount: () => set((state)=>({count: state.count + 2})) 
}))

export default useStore;