import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: null,
  blog: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    postBlog: (state, action) => {
      state.blogs = [action.payload, ...state.blogs];
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
    setBlog: (state, action) => {
      state.blog = action.payload
    },
    updateBlog: (state, action) => {
      const updateBlog = action.payload;
      state.blogs = state.blogs.map((data) => {
        if (data.id === updateBlog._id) {
          return updateBlog;
        } else {
          return data;
        }
      });
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(
        (data) => data._id !== action.payload._id
      );
    },
    clearBlogs: (state, action) => {
      state.blogs = null || [];
    },
  },
});

export const { postBlog, setBlogs, setBlog,  updateBlog, deleteBlog, clearBlogs } =
  blogSlice.actions;

export default blogSlice.reducer;
