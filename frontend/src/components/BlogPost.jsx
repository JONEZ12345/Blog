import React from "react";
import "./BlogStyle.css";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDeleteBlog, useGetBlog } from "../hooks/api/useBlog";
import { useNavigate } from "react-router-dom";

function BlogPost({ _id, title, content, author, updatedAt }) {
  const navigate = useNavigate();
  const { killBlog, isLoaded } = useDeleteBlog();
  const { getBlog, isLoaded: loaded } = useGetBlog();

  async function handleDelete() {
    // console.log(_id)
    await killBlog(_id);
  }

  function handleUpdate(id) {
    getBlog(id);
    navigate(`/update/${id}`);
    return;
  }

  return (
    <div className="w-full">
      <div className="w-[200px] blog-post flex justify-between items-center">
        <div className=" max-w-[150px] ">
          <h2>{title}</h2>
          <p>{content}</p>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Date:</strong>
            {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
          </p>
        </div>
        <div className="w-auto flex flex-col justify-start items-center">
          <div className="mb-8">
            <FaEdit
              onClick={() => handleUpdate(_id)}
              className="text-blue-500 hover:text-blue-600"
            />
          </div>
          <div>
            {isLoaded ? (
              "..."
            ) : (
              <FaTrashAlt
                onClick={handleDelete}
                className="text-black-500 hover:text-red-600"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
