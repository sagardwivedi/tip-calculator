import { NextPage } from "next";

type TipInputProps = {
  tip: number;
  setTip: (tip: number) => void;
};

const TipInput: NextPage<TipInputProps> = ({ tip, setTip }) => {
  return (
    <div className="mb-8">
      <p className="mb-3">Select Tip %</p>
      <div className="flex flex-row flex-wrap gap-[10px] sm:grid sm:grid-cols-3">
        {[5, 10, 15, 25, 50].map((value) => (
          <label key={value}>
            <input
              className="peer sr-only"
              name="size"
              type="radio"
              value={value}
              onChange={(e) => setTip(Number(e.target.value))}
              checked={tip === 0 ? false : tip === value}
            />
            <div
              className={`flex h-11 w-[9.5rem] cursor-pointer items-center justify-center rounded-md bg-cyan-900 text-xl text-grayish_cyan-300 transition-colors duration-200 ease-linear peer-checked:bg-cyan-500 peer-checked:text-cyan-900 sm:w-28`}
            >
              {value}%
            </div>
          </label>
        ))}
        <input
          className={`h-11 w-[9.5rem] rounded-md border-none bg-grayish_cyan-100 text-right text-xl text-cyan-900 placeholder:text-center focus-within:ring-2 focus-within:ring-cyan-500 sm:w-28`}
          type={"number"}
          placeholder={`Custom`}
        />
      </div>
    </div>
  );
};

export default TipInput;
