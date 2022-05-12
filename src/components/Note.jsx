import React from "react";

const Note = ({ content = "Default value" }) => {
  return (
    <div className="bg-yellow-100 w-full h-32 p-2 flex flex-col justify-between rounded-md shadow-md border-2 border-yellow-200">
      <h4 className="text-yellow-800 font-semibold text-sm">{content}</h4>
      <div className="flex justify-between">
        <button className="btn-purple text-xs p-1">Make important</button>
        <button className="btn-danger text-xs p-1 w-16">Delete</button>
      </div>
    </div>
  );
};

export default Note;
