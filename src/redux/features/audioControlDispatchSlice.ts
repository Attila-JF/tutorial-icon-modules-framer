import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
export const audioControlDispatchSlice = createSlice({
  name: ' audioControlDispatcher',
  initialState: {
    play: false,
   
  },
  reducers: {
    audioCommand: (state, action) => {
              state.play=action.payload
   },

  }
})
//for subscribing functions
// export function play(state) {
//   return state.audioControlDispatcher.play;
// }

export const play =(state: RootState) => state.audioControlDispatcher.play;

export const { audioCommand, } = audioControlDispatchSlice.actions



export default audioControlDispatchSlice.reducer