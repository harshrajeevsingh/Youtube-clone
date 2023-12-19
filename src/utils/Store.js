import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import searchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
import LocationSlice from "./LocationSlice";

const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
    search: searchSlice,
    chat: ChatSlice,
    location: LocationSlice,
  },
});

export default store;
