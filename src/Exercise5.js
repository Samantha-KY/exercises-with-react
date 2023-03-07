import React from "react";

const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

const Exercise5 = () => {
  return (
    <div className="flex flex-col mt-24 justify-center ml-[50%] gap-2">
      <ul className="list-disc">
        {data.map((dogType, index) => (
          <li key={index}>{dogType}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise5;
