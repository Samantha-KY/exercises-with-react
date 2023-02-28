import React, { useState } from "react";

const Exercise4 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-28">
      <p className="font-bold text-3xl">
        You clicked the button {count} time{count > 1 ? "s" : ""}
      </p>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 text-white px-10 py-5 rounded-lg"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click me{" "}
        </button>
      </div>
    </div>
  );
};

export default Exercise4;
