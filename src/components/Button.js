const Button = ({ text }) => (
    <div className="flex justify-center items-center mt-16">
        <button
            className="bg-blue-500 text-white px-10 py-5 rounded-lg"
            onClick={() => alert(text)}
        >
            Click me
        </button>
    </div>
);

export default Button