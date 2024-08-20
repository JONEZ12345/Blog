import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { USER_URL } from "../../api";
import { useAuthContext } from "../../context/hooks/useAuthContext";
// import { id } from "date-fns/locale";

const useRegister = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  const register = (name, email, password) => {
    setIsLoaded(true);
    const time = new Date();
    const createdAt = time.toISOString();
    const updatedAt = time.toISOString();

    const data = {
      name: name,
      email: email,
      password: password,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`

    fetch(USER_URL + "/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoaded(false);
          toast.error(response.statusText || "Error with our response!");
          return;
          // console.log("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.length);
        if (data.length === 0) {
          setIsLoaded(false);
          return;
        }

        toast.success(
          data?.name + " registered successfully" ||
            "User registration successful"
        );
        navigate("/login");

        // setWorkout(data);
        setIsLoaded(true);
        // console.log(data); // Process the JSON data here
      })
      .catch((error) => {
        setIsLoaded(false);
        toast.error(error.error || "Something is wrong with our server");
        // console.error(
        //   "There has been a problem with your fetch operation:",
        //   error
        // );
      });
  };

  return { register, isLoaded };
};

const useLogin = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = (email, password) => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`

    fetch(USER_URL + "/user")
      .then((response) => {
        if (!response.ok) {
          setIsLoaded(false);
          toast.error(response.statusText || "Error with our response!");
          return;
          // console.log("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.length);
        if (data.length === 0) {
          setIsLoaded(false);
          return;
        }

        // data.array.forEach(element => {

        // });

        // User details is vetted
        const item = data.filter((data) =>
          data.email === email && data.password === password ? data : null
        );
        // console.log(item[0])

        // if user credentials is invalid
        // ...return error (Incorrect login details)
        if (item[0] == undefined || item === null) {
          toast.error("Incorrect login details");
          return;
        }

        // if user credentials is valid...
        if (item[0]) {
          // 1. Remove password
          const data = {
            id: item[0]?.id,
            email: item[0]?.email,
            name: item[0]?.name,
          };
          // 2. Store user information on local store
          localStorage.setItem("user", JSON.stringify(data));
          // 3. Stores user information in react state
          dispatch({ type: "LOGIN", payload: data });
          // 4. Notify the user on successful login
          toast.success(
            item[0]?.name + " logged in successfully" ||
              "user logged in successfully"
          );
          // 5. Navigate to default page
          navigate("/");

          // setWorkout(data);
          setIsLoaded(true);
          // 6. End process
          return;
        }

        // console.log(data); // Process the JSON data here
      })

      // If there is error with the FetchAPI system...
      // ...catch error
      .catch((error) => {
        setIsLoaded(false);
        // Notify user about the error
        toast.error(error.error || "Something is wrong with our server");
        // console.error(
        //   "There has been a problem with your fetch operation:",
        //   error
        // );
      });
  };

  return { login, isLoaded };
};

const useLogout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    setIsLoaded(true);

    // "http://localhost:3001/workout"
    // `{API_URL}/workout`

    fetch(USER_URL + "/workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoaded(false);
          toast.error(response.statusText || "Error with our response!");
          return;
          // console.log("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.length);
        if (data.length === 0) {
          setIsLoaded(false);
          return;
        }

        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
        navigate("/login");

        // setWorkout(data);
        setIsLoaded(true);
        // console.log(data); // Process the JSON data here
      })
      .catch((error) => {
        setIsLoaded(false);
        toast.error(error.error || "Something is wrong with our server");
        // console.error(
        //   "There has been a problem with your fetch operation:",
        //   error
        // );
      });
  };

  return { logout, isLoaded };
};

export { useRegister, useLogin, useLogout };
