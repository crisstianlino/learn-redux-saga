import { action } from 'typesafe-actions'
import { NewsHighlightsOrderTypes, NewsHighlightsOrder } from './types'

export const loadRequest = () => action(NewsHighlightsOrderTypes.LOAD_REQUEST)
export const loadSuccess = (data: NewsHighlightsOrder[]) =>
    action(NewsHighlightsOrderTypes.LOAD_SUCCESS, data)
export const loadFailure = () => action(NewsHighlightsOrderTypes.LOAD_FAILURE)
