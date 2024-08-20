import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className=" w-full flex justify-center">
        <div className="w-full md:w-[1200px] px-2">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
