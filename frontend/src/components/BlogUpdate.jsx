import React, { useEffect, useState } from "react";
import { useCreateBlog, useGetBlog, useUpdateBlog } from "../hooks/api/useBlog";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHandleUpdate } from "../hooks/utils/handleUpdate";

const publishSelect = [
  { name: "Publish", status: true, id: 1, value: "1" },
  { name: "Draft", status: false, id: 2, value: "1" },
];

export default function BlogUpdateForm() {
  const { id } = useParams();
  const { formData, handleInputChange } = useHandleUpdate();
  const { getBlog, isLoaded: loaded } = useGetBlog();
  const { editBlog, isLoaded: loading } = useUpdateBlog(id);
  const navigate = useNavigate();

  useEffect(() => {
    getBlog(id);
    console.log(id);
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const res = await editBlog(formData);
    if (res === 202) return navigate("/");
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
              value={formData.publish ? "1" : "2"}
              onChange={handleInputChange}
              required
            >
              <option value="1">Publish</option>
              <option value="2">Draft</option>
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
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
