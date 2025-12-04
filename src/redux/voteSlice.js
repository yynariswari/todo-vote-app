import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    "Adit Pratama",
    "Rani Lestari",
    "Bima Saputra",
    "Salsa Ayu",
    "Dito Wirawan",
  ],
  currentUser: null,
};

const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { selectUser } = voteSlice.actions;
export default voteSlice.reducer;
