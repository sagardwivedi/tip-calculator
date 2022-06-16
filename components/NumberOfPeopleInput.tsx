import { NextPage } from "next";

type NumberOfPeopleInputProps = {
  numberOfPeople: number;
  setNumberOfPeople: (numberOfPeople: number) => void;
};

const NumberOfPeopleInput: NextPage<NumberOfPeopleInputProps> = ({
  numberOfPeople,
  setNumberOfPeople,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(Number(e.target.value));
  };

  return (
    <div className="relative flex flex-grow flex-col">
      <p>Number of People</p>
      <input
        type={"number"}
        className={`input-style ${
          numberOfPeople > 0 ? "text-cyan-900" : "text-grayish_cyan-500"
        } focus-within:ring-cyan-500`}
        value={numberOfPeople}
        onChange={handleChange}
      />
      <span className="svg-style">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default NumberOfPeopleInput;
