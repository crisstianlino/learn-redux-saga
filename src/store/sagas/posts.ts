import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Creators as PostsActions, PostsTypes } from '../ducks/posts'
import axios, { AxiosResponse } from 'axios'

function* fetchPosts() {
    try {
        const response: AxiosResponse = yield call(function () {
            return axios.request({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts'
            })
        })
        yield put(PostsActions.loadSuccess(response.data))
    } catch (err) {
        if (err instanceof Error) {
            yield put(PostsActions.loadFailure())
        }
    }
}

function* postsSaga() {
    yield all([takeLatest(PostsTypes.LOAD_REQUEST, fetchPosts)])
}

export default postsSaga
