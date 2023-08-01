import axios from 'axios';

// Action Types
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_UPLOAD_REQUEST = 'USER_UPLOAD_REQUEST';
export const USER_UPLOAD_SUCCESS = 'USER_UPLOAD_SUCCESS';
export const USER_UPLOAD_FAIL = 'USER_UPLOAD_FAIL';

// Signup Action
export const signup = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

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
  dispatch({ type: USER_LOGOUT });
};

// Upload Action
export const upload = (file) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPLOAD_REQUEST });

    // Get the current user from the state
    const { user } = getState().user;

    // Perform the upload logic here (e.g., upload the file to Firebase Storage)
    // Replace the following line with your actual upload logic

    // Simulating a delay with setTimeout to demonstrate async action
    setTimeout(() => {
      // After successful upload, update the user data in the Firestore database using the provided API endpoint
      // Note: You may need to modify the API endpoint based on your backend setup
      axios.post('/api/upload', {
        uid: user.uid,
        fileUrl: 'https://example.com/uploaded-file.jpg', // Replace with the actual URL of the uploaded file
      });

      dispatch({ type: USER_UPLOAD_SUCCESS });
    }, 2000); // Simulating a 2-second delay for demonstration purposes
  } catch (error) {
    dispatch({
      type: USER_UPLOAD_FAIL,
      payload: error.message,
    });
  }
};
