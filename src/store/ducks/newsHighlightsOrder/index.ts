import { Reducer } from 'redux'
import { NewsHighlightsOrderState, NewsHighlightsOrderTypes } from './types'

const INITIAL_STATE: NewsHighlightsOrderState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<NewsHighlightsOrderState> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case NewsHighlightsOrderTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case NewsHighlightsOrderTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            }
        case NewsHighlightsOrderTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state
    }
}

export default reducer
