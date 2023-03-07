const JokeCard = ({ setup, punchline }) => (
    <div className="flex flex-col justify-center items-center gap-2 rounded-md py-8 px-5 bg-white w-full">
        <p className="font-bold text-xl text-center">{setup}</p>
        <p className="text-center">{punchline}</p>
    </div>
);

export default JokeCard