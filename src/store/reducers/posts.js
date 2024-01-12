import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postsList: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.postsList.push(action.payload)
        }
    }
})

export const { postsReceived } = postsSlice.actions
export default postsSlice.reducer