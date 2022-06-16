import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import BillInput from "../components/BillInput";
import NumberOfPeopleInput from "../components/NumberOfPeopleInput";
import ResultAmount from "../components/ResultAmount";
import TipInput from "../components/TipInput";

const Index: NextPage = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  const calculateResult = () => {
    if (bill > 0 && tip > 0 && numberOfPeople > 0) {
      // formula to calculate tip
      const tipAmount = (bill * tip) / 100;
      const tipPerPerson = tipAmount / numberOfPeople;
      const personAmount = (tipAmount + bill) / numberOfPeople;
      return { tipPerPerson, personAmount };
    }
    return { tipPerPerson: 0.0, personAmount: 0.0 };
  };

  useEffect(() => {
    calculateResult();
  });

  const { tipPerPerson, personAmount } = calculateResult();

  return (
    <div className="mt-[6%] flex justify-center">
      <Head>
        <title>Tip Calculator</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-8 text-2xl tracking-[0.6rem] text-grayish_cyan-700 sm:mb-12 sm:text-lg">
          <span>SPLI</span>
          <br />
          <span>TTER</span>
        </h3>
        <div className="flex w-full max-w-4xl flex-row flex-wrap justify-center gap-y-10 rounded-t-[2rem] bg-white p-8 sm:gap-x-10 sm:rounded-2xl sm:p-6">
          <div>
            <BillInput bill={bill} setBill={setBill} />
            <TipInput setTip={setTip} />
            <NumberOfPeopleInput
              numberOfPeople={numberOfPeople}
              setNumberOfPeople={setNumberOfPeople}
            />
          </div>
          <div className="flex flex-grow flex-col justify-between rounded-2xl bg-cyan-900 px-8 py-10">
            <ResultAmount
              tipAmount={tipPerPerson}
              personAmount={personAmount}
            />
            <button
              className="mt-6 w-full rounded-sm border-none bg-grayish_cyan-700 py-2 text-cyan-900 hover:bg-cyan-500/90 disabled:bg-cyan-900/70"
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

export default Index;
