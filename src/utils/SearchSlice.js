import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cachedResults: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      const { term, results } = action.payload;
      state.cachedResults[term] = results;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
