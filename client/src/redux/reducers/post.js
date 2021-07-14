import { GET_POSTS, POST_ERROR } from "../actions/types";

const initialStata = {
  posts: [],
  post: [],
  loading: true,
  error: {},
};
export default function post(state = initialStata, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
}
