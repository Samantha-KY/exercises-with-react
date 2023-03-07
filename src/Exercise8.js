import data from "./data.json";
import JokeCard from "./components/JokeCard";

const Exercise8 = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-green-200">
      <div className="mt-28 xl:w-1/2 mx-auto flex xl:flex-row gap-5 flex-col w-full px-10">
        {data.map((joke) => {
          return <JokeCard setup={joke.setup} punchline={joke.punchline} />;
        })}
      </div>
    </div>
  );
};

export default Exercise8;
