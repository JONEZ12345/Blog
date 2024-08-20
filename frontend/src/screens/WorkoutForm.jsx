import React, { useEffect, useState } from "react";
import { useCreateWorkout } from "../api/useCreateWorkout";
import { set } from "date-fns";
import { useAuthContext } from "../context/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function WorkoutForm() {
  // this is a useState hook
  // states:to store values
  // useState: [state, stateFunction]
  const [day, setDay] = useState("");
  const [reps, setReps] = useState("");
  const [author, setAuthor] = useState("");

  // this is a 'custom hook'
  // Custom Hook for 'creating workout'
  const { createWorkout } = useCreateWorkout(""); //We are deconstructing...
  // .."createWorkout function", which is embedded and exported..
  // ..within and from (respectively), useCreateWorkout function

  // this is a 'useNavigate' hook
  // Custom Hook for(creating workout)
  const navigate = useNavigate(); //we are deconstructing...

  // this is a'ContextAPI' state
  // routing: used as a function to route pages
  const { user } = useAuthContext();

  //  this is a 'useEffect hook'
  // life cycle:used as a function to maintain...
  // ..sync with the system
  useEffect(() => {
    //this is used to ensure page 'authorization' routing...
    // ..ensuring user is authenticated first,but accessing page

    // 1. To check if user data exists
    if (!user) {
      //if no user
      navigate("/register"); //route back to register page
      return; //stop execution
    }
  }, [user]); // [user]: this is a necessary dependency to prevent multiple rerendering

  // A custom function(arrow function)
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh/reload of page

    // initiate out 'createWorkout' function
    createWorkout(day, reps, author); //function: sending out data(days,reps,author)...
    // .. as arguments

    // clear our fields after function has ran
    setDay("");
    setReps("");
    setAuthor("");
  };

  // render jsx(ui)
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="w-full mt-5">
      <div className="w-full flex flex-col items-center bg-slate-300  py-5 ">
        <h2 className="text-sky-600 text-center w-full text-2xl font-black ">
          {" "}
          Create Workout{" "}
        </h2>
        <div className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-[450px] lg:w-[550px] flex flex-col justify-center items-center"
          >
            <input
              placeholder="Enter day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-[80%] bg-slate-50 my-2 outline-1 outline-blue-400 px-3 rounded-lg "
              type="text"
              name="day"
            />
            <input
              placeholder="Enter reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-[80%] bg-slate-50 my-2 outline-1 outline-blue-400 px-3 rounded-lg "
              type="text"
              name="reps"
            />
            <input
              placeholder="Enter author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-[80%] bg-slate-50 my-2 outline-1 outline-blue-400 px-3 rounded-lg "
              type="text"
              name="author"
            />
            <button
              type="submit"
              className="w-[80%] bg-green-700 my-3 text-white font-bold text-xl rounded-xl py-1"
            >
              {" "}
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
