import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setIem("token", payload.token);
      return (state = {
        ...state,
        ...payload,
        loading: false,
        isAuth: true,
      });

    case REGISTER_FAIL:
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
