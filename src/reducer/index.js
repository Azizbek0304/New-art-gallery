import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL,
} from '../../actions/userActions';

// Initial state
const initialState = {
  user: null,
  error: null,
  loading: false,
  isAuthor: false,
  uploadedFile: null,
};

// User Reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
    case USER_LOGIN_REQUEST:
    case UPLOAD_FILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case USER_SIGNUP_FAIL:
    case USER_LOGIN_FAIL:
    case UPLOAD_FILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthor: false,
      };
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadedFile: action.payload,
      };
    default:
      return state;
  }
};
