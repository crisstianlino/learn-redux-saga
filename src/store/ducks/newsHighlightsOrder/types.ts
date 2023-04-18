//action types
export enum NewsHighlightsOrderTypes {
    LOAD_REQUEST = '@newsHighlightsOrder/LOAD_REQUEST',
    LOAD_SUCCESS = '@newsHighlightsOrder/LOAD_SUCCESS',
    LOAD_FAILURE = '@newsHighlightsOrder/LOAD_FAILURE'
}

//data types
interface NewsCategory {
    id: number
    title: string
    titlenEN: string
}

interface NewsHighlight {
    buttonLabel: string
    category: NewsCategory
    categoryId: number
    createdAt: string
    id: number
    image: string
    subtitle: string
    subtitleEN: string
    title: string
    titleEN: string
    url: string
}

export interface NewsHighlightsOrder {
    id: number
    highlightId: number
    isFixed: boolean
    highlight: NewsHighlight
}

//state type
export interface NewsHighlightsOrderState {
    readonly data: NewsHighlightsOrder[]
    readonly loading: boolean
    readonly error: boolean
}
