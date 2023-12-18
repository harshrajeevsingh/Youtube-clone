import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import searchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    search: searchSlice,
    chat: ChatSlice,
  },
});

export default store;
