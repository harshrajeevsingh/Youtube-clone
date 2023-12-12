import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import searchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    search: searchSlice,
  },
});

export default store;
