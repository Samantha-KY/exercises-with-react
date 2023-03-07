import React from "react";

const Exercise2 = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <button
        className="bg-blue-500 text-white px-10 py-5 rounded-lg"
        onClick={() => alert("Hello!! How are you?")}
      >
        Click me
      </button>
    </div>
  );
};

export default Exercise2;
