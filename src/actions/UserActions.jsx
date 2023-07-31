// userActions.js

// Action Typesexport
export const SIGN_UP_AUTHOR = 'SIGN_UP_AUTHOR';
export const SIGN_UP_SIMPLE = 'SIGN_UP_SIMPLE';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Action Creators
export const signUpAuthor = (username, email, password) => {
  return {
    type: SIGN_UP_AUTHOR,
    payload: {
      userType: 'author',
      username,
      email,
      password,
    },
  };
};

export const signUpSimple = (username, email, password) => {
  return {
    type: SIGN_UP_SIMPLE,
    payload: {
      userType: 'simple',
      username,
      email,
      password,
    },
  };
};

export const signInAction = (email, password) => {
  return {
    type: SIGN_IN,
    payload: { email, password },
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};
