import { configureStore } from '@reduxjs/toolkit'
import userCredReducer from './features/user/userCredSlices'
export const store = configureStore({
    reducer: { userCredReducer },
})
