import { NextPage } from "next";

type TipInputProps = {
  tip: number;
  setTip: (tip: number) => void;
};

const TipInput: NextPage<TipInputProps> = ({ tip, setTip }) => {
  return (
    <div className="mb-8">
      <p>Select Tip %</p>
      <div className="flex gap-4 flex-row flex-wrap sm:grid sm:grid-cols-3 sm:gap-4">
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
              className={`flex h-12 sm:w-28 w-36 cursor-pointer items-center justify-center rounded-md bg-cyan-900 text-xl sm:text-2xl text-grayish_cyan-300 peer-checked:bg-cyan-500 peer-checked:text-cyan-900`}
            >
              {tip}%
            </div>
          </label>
        ))}
        <input
          className={`h-12 w-28 rounded-md border-none bg-grayish_cyan-100 text-right text-2xl text-cyan-900 placeholder:text-center focus-within:ring-2 focus-within:ring-cyan-500`}
          type={"number"}
          placeholder={`Custom`}
        />
      </div>
    </div>
  );
};

export default TipInput;
