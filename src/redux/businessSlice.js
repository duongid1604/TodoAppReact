import {createSlice} from '@reduxjs/toolkit';

export const businessSlice = createSlice({
  name: 'businessTasks',
  initialState: [],
  reducers: {
    addBusinessTask: (state, action) => {
      const newTask = {
        id: Math.random(),
        name: action.payload.businessTask,
      };
      state.push(newTask);
    },
    deleteBusinessTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    doneBusinessTask: (state, action) => {},
  },
});

export const {addBusinessTask, deleteBusinessTask, doneBusinessTask} =
  businessSlice.actions;

export default businessSlice.reducer;
