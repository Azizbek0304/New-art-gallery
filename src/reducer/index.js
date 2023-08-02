import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_UPLOAD_REQUEST,
  USER_UPLOAD_SUCCESS,
  USER_UPLOAD_FAIL,
} from '../actions/UserActions';

// Initial state
const initialState = {
  user: null,
  error: null,
  loading: false,
};

// User Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
    case USER_LOGIN_REQUEST:
    case USER_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case USER_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USER_SIGNUP_FAIL:
    case USER_LOGIN_FAIL:
    case USER_UPLOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
