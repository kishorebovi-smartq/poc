import UserReducer from './user'
import PostsReducer from './posts'

const rootReducer = {
    user: UserReducer,
    posts: PostsReducer,
}

export default rootReducer