import axios from 'axios';

// Action Types
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAIL = 'UPLOAD_FILE_FAIL';

// Signup Action
export const signup = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Replace '/api/signup' with your actual signup endpoint
    const { data } = await axios.post('/api/signup', formData, config);

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Login Action
export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Replace '/api/login' with your actual login endpoint
    const { data } = await axios.post('/api/login', formData, config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  // Add code to handle logout on the server if needed
  dispatch({ type: USER_LOGOUT });
};

// Upload Action
export const uploadFile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_FILE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    // Replace '/api/upload' with your actual upload endpoint
    const { data } = await axios.post('/api/upload', formData, config);

    dispatch({ type: UPLOAD_FILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPLOAD_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
