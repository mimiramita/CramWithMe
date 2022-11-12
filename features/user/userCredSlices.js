import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uid: '',
    email: '',
    photoURL: ''
}
export const userCredSlice = createSlice({
    name: 'userCred',
    initialState,
    reducers: {
        saveUid: (state, action) => {
            state.uid = action.payload
        },
        saveEmail: (state, action) => {
            state.email = action.payload
        },
        savePhoto: (state, action) => {
            state.photoURL = action.payload
        },
        clearUserCredential: (state) => {
            state = { uid: '', email: '', photoURL: '' }
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveUid, saveEmail, savePhoto, removeUserCredential } = userCredSlice.actions

export default userCredSlice.reducer