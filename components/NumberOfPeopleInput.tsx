import { NextPage } from "next";

type NumberOfPeopleInputProps = {
  numberOfPeople: string;
  setNumberOfPeople: (numberOfPeople: string) => void;
};

const NumberOfPeopleInput: NextPage<NumberOfPeopleInputProps> = ({
  numberOfPeople,
  setNumberOfPeople,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(e.target.value);
  };

  return (
    <div className="relative flex flex-grow flex-col">
      <p>Number of People</p>

      {/* Showing this when numberOfPeople === "0" */}
      {numberOfPeople === "0" ? (
        <span className="absolute right-0 text-red">Can&apos;t be zero</span>
      ) : (
        ""
      )}
      <input
        type={"number"}
        className={`input-style ${
          numberOfPeople === "0"
            ? "ring-red focus:ring-red"
            : "ring-transparent focus:ring-cyan-500"
        }`}
        value={numberOfPeople}
        placeholder={`0`}
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
