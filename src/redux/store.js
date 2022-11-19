import {configureStore} from '@reduxjs/toolkit';
import businessSlice from './businessSlice';
import personalSlice from './personalSlice';

export default configureStore({
  reducer: {
    personalTasks: personalSlice,
    businessTasks: businessSlice,
  },
});
