import { Store, createStore } from 'redux'
import rootReducer from './ducks/rootReducer'
import { PostsState } from './ducks/posts'

export interface ApplicationState {
    posts: PostsState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
