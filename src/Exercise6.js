import React from "react";

const data = [
  "🐶 dog",
  "🐱 cat",
  "🐔 chicken",
  "🐮 cow",
  "🐏 sheep",
  "🏇 horse",
];

const DataHolder = (props) => (
  <div className="border border-solid border-gray-500 p-5">{props.value}</div>
);

const Exercise6 = () => {
  return (
    <div className="mt-28 w-96 mx-auto">
      {data.map((value, index) => {
        return <DataHolder key={index} value={value} />;
      })}
    </div>
  );
};

export default Exercise6;
