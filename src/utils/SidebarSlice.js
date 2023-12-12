import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    closeSidebar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
