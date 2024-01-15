import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  username: '',
  email: '',
  password: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      const {username, email, password} = action.payload
      state.isLoggedIn = true
      state.username = username
      state.email = email
      state.password = password
    },
    userLoggedOut(state) {
      state.isLoggedIn = false
      state.username = ''
      state.email = ''
      state.password = ''
    }
  }
})

export const {userLoggedIn, userLoggedOut} = userSlice.actions
export default userSlice.reducer