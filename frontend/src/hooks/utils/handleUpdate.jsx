import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useHandleUpdate = () => {
  const { blog } = useSelector((state) => state.blog);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    publish: "",
    publisher: "",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog?.title || "",
        author: blog?.author || "",
        content: blog?.content || "",
        publish: blog?.publish || "",
        publisher: blog?.publisher || "",
      });
    }
  }, [blog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  return { formData, handleInputChange };
};
