import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userCredential: {}
}
export const userCredSlice = createSlice({
    name: 'userCred',
    initialState,
    reducers: {
        saveUserCredential: (state, action) => {
            state.userCredential = action.payload
        },
        removeUserCredential: (state) => {
            state.userCredential = {}
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveUserCredential, removeUserCredential } = userCredSlice.actions

export default userCredSlice.reducer