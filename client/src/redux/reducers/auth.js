import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  DELETE_ACCOUNT,
} from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: null,
};

export default function foo(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return (state = {
        ...state,
        ...payload,
        loading: false,
        isAuth: true,
      });

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOGOUT:
    case DELETE_ACCOUNT:
      localStorage.removeItem("token");
      return (state = {
        ...state,
        token: null,
        loading: false,
        isAuth: false,
      });

    default:
      return state;
  }
}
