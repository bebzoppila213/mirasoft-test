import {put, takeEvery, call} from "redux-saga/effects"
import { LOAD_POSTS, setPosts } from "./postReducer"
import { loadPosts } from "../api/posts";

function* fetchPostsWorker(): any {
    const data = yield call(loadPosts)
    yield put(setPosts(data))
}

export function* postWatcher() {
    yield takeEvery(LOAD_POSTS, fetchPostsWorker)
}