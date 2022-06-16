import { NextPage } from "next";

type TipInputProps = {
  setTip: (tip: number) => void;
};

const TipInput: NextPage<TipInputProps> = ({ setTip }) => {
  return (
    <div className="mb-8">
      <p className="mb-3">Select Tip %</p>
      <div className="flex flex-row flex-wrap gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
        {[5, 10, 15, 25, 50].map((tip) => (
          <label key={tip}>
            <input
              className="peer sr-only"
              name="size"
              type="radio"
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
            />
            <div
              className={`flex h-12 w-[9.5rem] cursor-pointer items-center justify-center rounded-md bg-cyan-900 text-xl text-grayish_cyan-300 peer-checked:bg-cyan-500 peer-checked:text-cyan-900 sm:w-28 sm:text-2xl`}
            >
              {tip}%
            </div>
          </label>
        ))}
        <input
          className={`h-12 w-[9.5rem] rounded-md border-none bg-grayish_cyan-100 text-right text-2xl text-cyan-900 placeholder:text-center focus-within:ring-2 focus-within:ring-cyan-500 sm:w-28`}
          type={"number"}
          placeholder={`Custom`}
        />
      </div>
    </div>
  );
};

export default TipInput;
