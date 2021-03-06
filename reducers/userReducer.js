import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
} from "../constant/userConstants";

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { Loading: true };
    case USER_LOGIN_SUCCESS:
      return { Loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { Loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { Loading: true };
    case USER_REGISTER_SUCCESS:
      return { Loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { Loading: false, error: action.payload };
    default:
      return state;
  }
};
