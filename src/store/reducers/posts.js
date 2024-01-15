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

export const { addPost } = postsSlice.actions
export default postsSlice.reducer