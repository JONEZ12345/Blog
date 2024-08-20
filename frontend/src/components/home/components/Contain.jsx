import React from "react";

function Contain({ children }) {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full">
        <div className="w-full">
          <div className="w-full flex gap-2.5 justify-center md:flex-row mt-5 px-4">
            {children}
            {/* <div className="w-full flex gap-2.5 flex-col-reverse md:flex-row mt-5 px-4"> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contain;
