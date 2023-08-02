import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from '../reducer';
// Import other reducers here if you have more

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
