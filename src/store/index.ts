import { Store, createStore } from 'redux'
import rootReducer from './ducks/rootReducer'
import { NewsHighlightsOrderState } from './ducks/newsHighlightsOrder/types'

export interface ApplicationState {
    newsHighlightsOrder: NewsHighlightsOrderState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
