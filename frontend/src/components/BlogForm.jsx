import React, { useState } from "react";
import { useCreateBlog } from "../hooks/api/useBlog";

const publishSelect = [
  { name: "Publish", id: 1, value: "1" },
  { name: "Draft", id: 2, value: "1" },
];

export default function BlogForm({ toggle, setToggle }) {
  const [formData, setData] = useState({
    title: "",
    author: "",
    content: "",
    publish: "",
    publisher: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...formData, [name]: value });
  };

  const { createBlog, isLoaded } = useCreateBlog();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    await createBlog(formData);
  }

  return (
    <>
      <div className="w-full">
        <div className="w-[100%]">
          <div className="w-full ">
            <h1 className="w-full text-[#353535] text-2xl font-mono font-semibold ">
              My Blog Form
            </h1>
          </div>
          <form
            className="w-[100%] flex flex-col justify-center items-center "
            onSubmit={handleSubmit}
          >
            <label>Title</label>
            <input
              type="text"
              className="w-[80%] border border-black border-solid py-1 px-2 rounded-xl text-black my-2 "
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <label>Author</label>
            <input
              type="text"
              className="w-[80%] border border-black border-solid py-1 px-2 rounded-xl text-black my-2 "
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
            <label>Content</label>
            <textarea
              type="text"
              className="w-[80%] h-[80px] border border-black border-solid py-1 px-2 rounded-xl text-black my-2 "
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
            ></textarea>
            <label>Select(publish / draft)</label>
            <select
              className="w-[80%] border border-black border-solid py-1 px-2 rounded-xl text-black my-2 "
              name="publish"
              value={formData.publish}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              {publishSelect &&
                publishSelect.map((data, index) => (
                  <option key={index} value={data?.value}>
                    {data?.name}
                  </option>
                ))}
            </select>
            <label>Publisher</label>
            <input
              type="text"
              className="w-[80%] border border-black border-solid py-1 px-2 rounded-xl text-black my-2 "
              name="publisher"
              value={formData.publisher}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="w-[80%] bg-green-700 hover:bg-green-800 text-white text-base font-bold rounded-xl py-1"
              disabled={isLoaded ? true : false}
            >
              {isLoaded ? "Loading..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
