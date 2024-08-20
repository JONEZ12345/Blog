import React, { useEffect, useState } from "react";
// import "./BlogStyle.css";
import BlogPost from "../components/BlogPost";
import { useGetBlogs } from "../hooks/api/useBlog";
import { useSelector } from "react-redux";
import BlogForm from "../components/BlogForm";
import { FaTimesCircle } from "react-icons/fa";
// import Example from "./dummy";

// const blogPosts = [
//   {
//     id: 1,
//     title: "First Blog Post",
//     content: "This is the content of the first blog post.",
//     author: "John Doe",
//     date: "2024-07-01",
//   },
//   {
//     id: 2,
//     title: "Second Blog Post",
//     content: "This is the content of the second blog post.",
//     author: "Jane Smith",
//     date: "2024-07-02",
//   },
//   {
//     id: 3,
//     title: "Third Blog Post",
//     content: "This is the content of the third blog post.",
//     author: "Alice Johnson",
//     date: "2024-07-03",
//   },
// ];

function Blog() {
  const [ toggle, setToggle ] = useState(false);
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs, isLoaded } = useGetBlogs();

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  useEffect(() => {
    if (isLoaded) {
      getBlogs();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="w-full font-bold md:w-full md:  ">Simple Blog</h1>
      </header>
      <div>
        <h1 className="w-full text-black text-2xl font-mono font-semibold ">My Blog Form<FaTimesCircle    onClick={() => setToggle(!toggle)} className="text-blue-500 hover:text-red-600" /> </h1>
      </div>
      {!toggle && (
        <div className="mt-9">
          <button
            onClick={() => setToggle(!toggle)}
            className=" bg-green-500 hover:bg-green-700 py-2 px-3 text-white font-mono font-semibold transition-all duration-1000 rounded-lg "
            type="button"
          >
            Create New Blog
          </button>
        </div>
      )}
      {toggle && (
        <div>
          <BlogForm toggle={toggle} setToggle={setToggle} />
          {/* <Example /> */}
        </div>
      )}
      <div className="blog-post">
        {blogs &&
          blogs.map((post, index) => <BlogPost key={index} {...post} />, [])}
      </div>
    </div>
  );
}

export default Blog;
