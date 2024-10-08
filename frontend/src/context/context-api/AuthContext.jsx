import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

// for workout timetable
export const authReducer = (state, action) => {
  // const updated = action.payload;

  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

// const [ workout, setWorkout] = useState([])
// This is for state management
// So in place of 'useState' hook, we used 'useReducer'

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // in order to keep the user logged in...
  // ...we have to pickup user login details from the sessionStorage...
  // ...then run an if check, validate the user is  still logged...
  // ...(by picking up the strings from browser storage)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // grab and convert...
    // ...data(user), from the localStorage, to object (from JSON)

    // {name: "Kelechi"} --- Object
    // {"name": "Kelechi"} --- JSON

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
