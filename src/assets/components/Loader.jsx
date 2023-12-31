import React from "react";
import { CircleLoader, RingLoader, ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] max-w-[420px] w-[100%] flex justify-center items-center">
      {/* <RingLoader color="black" /> */}
      <ScaleLoader color="black" />
    </div>
  );
};

export default Loader;
