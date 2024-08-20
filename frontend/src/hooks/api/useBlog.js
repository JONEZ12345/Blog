import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteBlog,
  postBlog,
  setBlog,
  setBlogs,
  updateBlog,
} from "../../slice/blog/blogSlice";

const useCreateBlog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createBlog = async (formData) => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`
    try {
      const response = await fetch(API_URL + "create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setIsLoaded(false);
        dispatch(postBlog(json?.data));
        console.log(json?.data);
      } else if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 402
      ) {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else if (response.status === "500") {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      }
    } catch (error) {
      setIsLoaded(false);
      toast.error(error.error || "Something is wrong with our server");
      // console.error(
      //   "There has been a problem with your fetch operation:",
      //   error
      // );
    }
  };

  return { createBlog, isLoaded };
};

const useGetBlogs = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const dispatch = useDispatch();

  // dispatchTime({ type: "CREATE_DATA", payload: json });
  const getBlogs = async () => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`
    try {
      const response = await fetch(API_URL);

      const json = await response.json();

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setIsLoaded(false);
        dispatch(setBlogs(json?.data));
        console.log(json?.data);
      } else if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 402
      ) {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else if (response.status === "500") {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      }
    } catch (error) {
      setIsLoaded(false);
      toast.error(error.error || "Something is wrong with our server");
      // console.error(
      //   "There has been a problem with your fetch operation:",
      //   error
      // );
    }
  };

  return { getBlogs, isLoaded };
};

const useUpdateBlog = (id) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editBlog = async (formData) => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`
    try {
      const response = await fetch(API_URL + "update/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setIsLoaded(false);
        dispatch(updateBlog(json?.data));
        console.log(json?.data);
        return response?.status;
      } else if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 402
      ) {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
        return response?.status;
      } else if (response.status === "500") {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
        return response?.status;
      } else {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
        return response?.status;
      }
    } catch (error) {
      setIsLoaded(false);
      toast.error(error.error || "Something is wrong with our server");
      // console.error(
      //   "There has been a problem with your fetch operation:",
      //   error
      // );
    }
  };

  return { editBlog, isLoaded };
};

const useGetBlog = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const dispatch = useDispatch();

  // dispatchTime({ type: "CREATE_DATA", payload: json });
  const getBlog = async (id) => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`
    try {
      const response = await fetch(API_URL + id);

      const json = await response.json();

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setIsLoaded(false);
        dispatch(setBlog(json?.data));
        console.log(json?.data);
      } else if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 402
      ) {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else if (response.status === "500") {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      }
    } catch (error) {
      setIsLoaded(false);
      toast.error(error.error || "Something is wrong with our server");
      // console.error(
      //   "There has been a problem with your fetch operation:",
      //   error
      // );
    }
  };

  return { getBlog, isLoaded };
};

const useDeleteBlog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const killBlog = async (id) => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`
    try {
      const response = await fetch(API_URL + "kill/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        setIsLoaded(false);
        dispatch(deleteBlog(json?.data));
        console.log(json?.data);
      } else if (
        response.status === 404 ||
        response.status === 401 ||
        response.status === 402
      ) {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else if (response.status === "500") {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      } else {
        setIsLoaded(false);
        toast.error(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );

        console.log(
          json?.error ||
            json?.detail ||
            json?.message ||
            "Error occurred when fetching"
        );
      }
    } catch (error) {
      setIsLoaded(false);
      toast.error(error.error || "Something is wrong with our server");
      // console.error(
      //   "There has been a problem with your fetch operation:",
      //   error
      // );
    }
  };

  return { killBlog, isLoaded };
};

export { useCreateBlog, useGetBlogs, useUpdateBlog, useGetBlog, useDeleteBlog };
