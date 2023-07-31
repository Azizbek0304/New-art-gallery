import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../actions/userActions'; // Import the sign-in action

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Dispatch the sign-in action with the form data
    dispatch(signInAction({ email, password }));
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
