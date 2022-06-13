import { NextPage } from "next";
import { useState } from "react";

export const BillInput: NextPage = () => {
  // assign value type to state
  const [bill, setBill] = useState<number>(0);
  return (
    <div className="relative flex flex-col">
      <p>Bill</p>
      <input
        type={"number"}
        className="input-style"
        placeholder="0"
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
  return (
    <div className="relative flex flex-col">
      <p>Select Tip %</p>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {["5%", "10%", "15%", "25%", "50%", "Custom"].map((number) => (
          <button
            className={`cursor-pointer rounded-md border-none p-1 text-xl text-grayish_cyan-300 ${
              number === "Custom"
                ? "bg-grayish_cyan-100 text-grayish_cyan-700"
                : "bg-cyan-900"
            }`}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export const NumberOfPeopleInput: NextPage = () => {
  return (
    <div className="relative flex flex-col">
      <p>Number of People</p>
      <input type={"number"} className="input-style" placeholder="0" />
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
    <div className="flex flex-row items-center justify-between">
      <h5 className="text-white">
        Tip Amount <br />
        <span className="text-grayish_cyan-500">/ person</span>
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
        <span className="text-grayish_cyan-500">/ person</span>
      </h5>
      <span className="text-4xl font-bold text-cyan-500">$0.00</span>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <div className="flex h-screen flex-col justify-end sm:flex-row sm:justify-center">
      <div className="flex max-w-4xl flex-col items-center justify-center">
        <h3 className="mb-12 tracking-[0.6rem] text-grayish_cyan-700">
          <span>SPLI</span>
          <br />
          <span>TTER</span>
        </h3>
        <div className="flex flex-row flex-wrap items-stretch justify-center gap-y-10 rounded-2xl bg-white p-6 sm:gap-x-10">
          <div className="">
            <BillInput />
            <TipInput />
            <NumberOfPeopleInput />
          </div>
          <div className="grow rounded-2xl bg-cyan-900 px-6 py-8">
            <div>
              <TipAmount />
              <TotalAmount />
              <button className="w-full" type="reset">
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
