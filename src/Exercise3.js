import React from "react";

const Button = (props) => (
  <div className="flex justify-center items-center mt-16">
    <button
      className="bg-blue-500 text-white px-10 py-5 rounded-lg"
      onClick={() => alert(props.text)}
    >
      Click me
    </button>
  </div>
);

const Exercise3 = () => {
  return (
    <div className="flex gap-2 mt-10 justify-center items-start">
      <Button text="You clicked on button 1" />
      <Button text="You clicked on button 2" />
      <Button text="You clicked on button 3" />
    </div>
  );
};

export default Exercise3;
