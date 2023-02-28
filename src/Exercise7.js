import React, { useState } from "react";

const Exercise7 = () => {
  const [indentification, setIndentification] = useState({
    firstName: "",
    lastName: "",
  });

  function onIndenficationFieldChange(e) {
    setIndentification((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="mt-28 flex flex-col w-80 mx-auto gap-2">
      <input
        type="text"
        name="firstName"
        placeholder="Fist name"
        onChange={onIndenficationFieldChange}
        className="border border-solid border-gray-300 p-2"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={onIndenficationFieldChange}
        className="border border-solid border-gray-300 p-2"
      />
      <button
        onClick={() =>
          alert(`Hi ${indentification.firstName} ${indentification.lastName}`)
        }
        disabled={!indentification.firstName || !indentification.lastName}
        className="bg-red-500 py-2 disabled:bg-red-300 hover:bg-red-600 text-white font-bold rounded-md"
      >
        GREET ME
      </button>
    </div>
  );
};

export default Exercise7;
