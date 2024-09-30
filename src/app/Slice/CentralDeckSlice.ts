import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Card, cardList } from '@/utils/cardObjects'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: Array<Card> = cardList

export const centralDeckSlice = createSlice({
  name: 'centralDeck',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCard : (state, action: PayloadAction<Card>) => {
        state.push(action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
  },
})

export const { addCard } = centralDeckSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCentralDeck = (state: RootState) => state.centralDeck.value

export default centralDeckSlice.reducer