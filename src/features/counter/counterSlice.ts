import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../../store'

interface CounterState {
    value: number
}

const initialState = {
    value: 0,
}as CounterState

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        
    },
})

export const {increment,decrement} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer;