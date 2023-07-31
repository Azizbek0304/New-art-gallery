// userActions.js

// Action Types
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Action Creators
export const signUpAction = (user) => {
  return {
    type: SIGN_UP,
    payload: user,
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
