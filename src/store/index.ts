import { Store, createStore, applyMiddleware } from 'redux'
import rootReducer from './ducks/rootReducer'
import { PostsState } from './ducks/posts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

export interface ApplicationState {
    posts: PostsState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
