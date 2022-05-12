import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="border-b-2 border-gray-400 py-1 px-4 placeholder:italic placeholder:text-gray-400 focus:placeholder:text-sky-600 focus:outline-none focus:border-sky-500"
    />
  );
};

export default Input;
