import { Reducer } from 'redux'
import { action } from 'typesafe-actions'

//action types

export enum PostsTypes {
    LOAD_REQUEST = '@posts/LOAD_REQUEST',
    LOAD_SUCCESS = '@posts/LOAD_SUCCESS',
    LOAD_FAILURE = '@posts/LOAD_FAILURE'
}

//state

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}

export interface PostsState {
    readonly data: Post[]
    readonly loading: boolean
    readonly error: boolean
}

// reducer

const INITIAL_STATE: PostsState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<PostsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostsTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case PostsTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            }
        case PostsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state
    }
}

export default reducer

//action creators

export const loadRequest = () => action(PostsTypes.LOAD_REQUEST)
export const loadSuccess = (data: Post[]) =>
    action(PostsTypes.LOAD_SUCCESS, data)
export const loadFailure = () => action(PostsTypes.LOAD_FAILURE)
