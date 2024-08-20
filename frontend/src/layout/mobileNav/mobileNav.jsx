import React from "react";
import { faNewspaper, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

function MobileNav({ setToggle, toggle }) {
  const location = useLocation();

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="w-[90%] mt-4 flex justify-center items-start flex-col"
    >
      <NavLink
        to="/"
        className={
          location.pathname === "/"
            ? "text-sky-400 font-bold text-base text-center flex justify-center items-center"
            : "text-black font-bold text-base text-center flex justify-center items-center"
        }
      >
        <AiOutlineHome className="mr-[5px]" />
        Home
      </NavLink>
      <NavLink
        to="/create/new"
        className={
          location.pathname === "/create/new"
            ? "text-sky-400 font-bold text-base text-center flex justify-center items-center"
            : "text-black font-bold text-base text-center flex justify-center items-center"
        }
      >
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPlus} />
        Add Workout
      </NavLink>
      <NavLink
        to="/blog"
        className={
          location.pathname === "/blog"
            ? "text-sky-400 font-bold text-base text-center flex justify-center items-center"
            : "text-black font-bold text-base text-center flex justify-center items-center"
        }
      >
        <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faNewspaper} />
        Blog
      </NavLink>
    </div>
  );
}

export default MobileNav;
