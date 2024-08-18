import { configureStore } from '@reduxjs/toolkit';
 
import {thunk} from 'redux-thunk'; // Import thunk
import UserSlice from '../features/UserSlice';

const rootReducer = {
  Users: UserSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Configure middleware
});
