import { createAction, createSlice } from '@reduxjs/toolkit'

const Fetching = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload)
      return action.payload;
      
    },
    removeInventory: (state, action) => {
      state.splice(0);
    },
    deleteUsers: (state, action) => {
      state.splice(0, action.payload.length)
    },
  },
});

export const { addUser, removeInventory, deleteUsers } = Fetching.actions
export default Fetching.reducer;
