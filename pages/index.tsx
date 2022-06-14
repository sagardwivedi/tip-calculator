import { NextPage } from "next";
import { useState } from "react";

const Index: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-12 tracking-[0.6rem] text-grayish_cyan-700">
          <span>SPLI</span>
          <br />
          <span>TTER</span>
        </h3>
        <div className="flex w-full max-w-4xl flex-row flex-wrap justify-center gap-y-10 rounded-t-[2rem] bg-white p-8 sm:gap-x-10 sm:rounded-2xl sm:p-6">
          <div>
            <BillInput />
            <TipInput />
            <NumberOfPeopleInput />
          </div>
          <div className="flex flex-grow flex-col justify-between rounded-2xl bg-cyan-900 px-8 py-10">
            <div className="space-y-6 sm:w-60">
              <TipAmount />
              <TotalAmount />
            </div>
            <button
              className="mt-6 w-full cursor-pointer rounded-sm border-none bg-cyan-500/90 py-2 text-cyan-900 disabled:bg-cyan-900/70"
              type="reset"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillInput: NextPage = () => {
  const [bill, setBill] = useState<number>(0);
  return (
    <div className="relative mb-8">
      <p>Bill</p>
      <input
        type={"number"}
        className={`input-style ${
          bill > 0 ? "text-cyan-900" : "text-grayish_cyan-500"
        }`}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <span className="svg-style">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export const TipInput: NextPage = () => {
  const [tip, setTip] = useState<string>("");
  return (
    <div className="mb-8">
      <p>Select Tip %</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {["5%", "10%", "15%", "25%", "50%", "Custom"].map((tip) => (
          <label key={tip}>
            <input
              className="peer sr-only"
              name="size"
              type="radio"
              value={tip}
              onChange={(e) => setTip(e.target.value)}
            />
            <div
              className={`${
                tip === "Custom"
                  ? "bg-grayish_cyan-100 text-grayish_cyan-700"
                  : "bg-cyan-900 text-grayish_cyan-300"
              } flex cursor-pointer items-center justify-center rounded-md  py-2  peer-checked:bg-cyan-500 peer-checked:text-cyan-900`}
            >
              {tip}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export const NumberOfPeopleInput: NextPage = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  return (
    <div className="relative">
      <p>Number of People</p>
      <input
        type={"number"}
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(Number(e.target.value))}
        className={`input-style ${
          numberOfPeople > 0 ? "text-cyan-900" : "text-grayish_cyan-500"
        }`}
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

export const TipAmount: NextPage = () => {
  return (
    <div className="flex flex-row  items-center justify-between">
      <h5 className="text-white">
        Tip Amount <br />
        <span className="text-grayish_cyan-500">/person</span>
      </h5>
      <span className="text-4xl font-bold text-cyan-500">$0.00</span>
    </div>
  );
};

export const TotalAmount: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h5 className="text-white">
        Total <br />
        <span className="text-grayish_cyan-500">/person</span>
      </h5>
      <span className="text-4xl font-bold text-cyan-500">$0.00</span>
    </div>
  );
};

export default Index;
