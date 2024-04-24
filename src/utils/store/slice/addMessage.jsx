import { createAction, createSlice } from '@reduxjs/toolkit'

const addMessage = createSlice({
  name: "fetched",
  initialState: [],
  reducers: {
    Message: (state, action) => {
      state.push(action.payload)
    },
    // removeInventory: (state, action) => {
    //   state.splice(0);
    // },
    // deleteUsers: (state, action) => {
    //   state.splice(0, action.payload.length)
    // },
  },
});

export const { Message, removeInventory, deleteUsers } = addMessage.actions
export default addMessage.reducer;
