import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationName: "US",
  },
  reducers: {
    changeLoaction: (state, action) => {
      state.locationName = action.payload;
    },
  },
});

export const { changeLoaction } = locationSlice.actions;
export default locationSlice.reducer;
