import React, { useCallback, useEffect, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";

const BackFace = () => {
  return <div className="text-xl font-extrabold">More information</div>;
};

const FrontFace = ({ src, name, title }) => {
  return (
    <div className="">
      <img src={src} alt="" />
      <p className="font-bold">{name}</p>
      <p>{title}</p>
    </div>
  );
};

const Exercise9 = () => {
  const [data, setData] = useState([]);

  const getRandomData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    getRandomData();
  }, [getRandomData]);

  return (
    <div className="flex flex-wrap gap-9 items-center justify-center h-screen bg-green-300 py-12 max-w-full overflow-x-hidden -z-10">
      <div className="w-full flex items-center justify-center mt-16">
        <button
          className="bg-red-500 border-b-4 hover:border-red-900 text-white font-bold px-7 py-3 rounded-lg text-3xl"
          onClick={() => getRandomData()}
        >
          Fetch Random
        </button>
      </div>
      {data.map((value, index) => (
        <ReactFlipCard
          key={index}
          containerCss="bg-white w-[300px] h-[400px] rounded-lg p-5"
          frontComponent={
            <FrontFace
              src={value.avatar}
              name={`${value.first_name} ${value.last_name}`}
              title={value.employment.title}
            />
          }
          backComponent={<BackFace />}
        />
      ))}
    </div>
  );
};

export default Exercise9;
