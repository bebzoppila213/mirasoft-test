import { IPost } from "../types/Types";

export const LOAD_POSTS = "LOAD_DATA";
export const SET_POSTS = "SET_POSTS";

const defaultState: IPost[] = [];

export default function postsReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload];
  }
  return state;
}

export const loadPostsCreator = () => ({ type: LOAD_POSTS });

export const setPosts = (payload: IPost[]) => ({ type: SET_POSTS, payload });
