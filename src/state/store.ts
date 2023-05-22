import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./postReducer";
import { postWatcher } from "./postSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    postsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


sagaMiddleware.run(postWatcher)