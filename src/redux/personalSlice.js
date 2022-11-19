import {createSlice} from '@reduxjs/toolkit';

export const personalSlice = createSlice({
  name: 'personalTasks',
  initialState: [],
  reducers: {
    addPersonalTask: (state, action) => {
      const newTask = {
        id: Math.random(),
        name: action.payload.personalTask,
        done: false,
      };
      state.push(newTask);
    },
    deletePersonalTask: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    donePersonalTask: (state, action) => {},
  },
});

export const {addPersonalTask, deletePersonalTask, donePersonalTask} =
  personalSlice.actions;

export default personalSlice.reducer;
