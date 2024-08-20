import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blog/blogSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  devTools: true,
});

export default store;
