const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      // Implement your sign-up logic here to update the state with the new user data
      const newUser = action.payload;
      return {
        ...state,
        users: [...state.users, newUser],
        currentUser: newUser,
        isAuthenticated: true,
      };

    case 'SIGN_IN':
      // Implement your sign-in logic here to check if the user exists and handle authentication
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        return {
          ...state,
          currentUser: user,
          isAuthenticated: true,
        };
      } else {
        return state; // If authentication fails, keep the state as is
      }

    case 'SIGN_OUT':
      // Implement your sign-out logic here to clear the current user and authentication status
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
