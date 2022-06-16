import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import BillInput from "../components/BillInput";
import NumberOfPeopleInput from "../components/NumberOfPeopleInput";
import ResultAmount from "../components/ResultAmount";
import TipInput from "../components/TipInput";

const Index: NextPage = () => {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<string>("");
  const [customTip, setCustomTip] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");

  const calculateResult = () => {
    const billAmount = Number(bill);
    const tipAmounts = Number(tip);
    const customTipAmount = Number(customTip);
    const numberOfPeoples = Number(numberOfPeople);

    if (billAmount > 0 && tipAmounts > 0 && numberOfPeoples > 0) {
      const tipAmount = billAmount * (tipAmounts / 100);
      const tipPerPerson = tipAmount / numberOfPeoples;
      const personAmount = (tipAmount + billAmount) / numberOfPeoples;
      return { tipPerPerson, personAmount };
    }
    if (billAmount > 0 && customTipAmount > 0 && numberOfPeoples > 0) {
      const tipAmount = billAmount * (customTipAmount / 100);
      const tipPerPerson = tipAmount / numberOfPeoples;
      const personAmount = (tipAmount + billAmount) / numberOfPeoples;
      return { tipPerPerson, personAmount };
    }

    return { tipPerPerson: 0.0, personAmount: 0.0 };
  };

  const { tipPerPerson, personAmount } = calculateResult();

  const resetAll = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setNumberOfPeople("");
  };

  return (
    <div className="mt-[6%] flex justify-center">
      <Head>
        <title>Tip Calculator</title>
        <meta
          name="description"
          content="A wonderfull app to calculate the tip. BestUI"
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-8 text-2xl tracking-[0.6rem] text-grayish_cyan-700 sm:mb-12 sm:text-lg">
          <span>SPLI</span>
          <br />
          <span>TTER</span>
        </h3>
        <div className="flex flex-row flex-wrap justify-center gap-y-8 rounded-t-[2.5rem] bg-white p-8 sm:gap-x-10 sm:rounded-2xl sm:p-6">
          <div className="flex flex-grow flex-col">
            <BillInput bill={bill} setBill={setBill} />
            <TipInput
              customTip={customTip}
              setCustomTip={setCustomTip}
              tip={tip}
              setTip={setTip}
            />
            <NumberOfPeopleInput
              numberOfPeople={numberOfPeople}
              setNumberOfPeople={setNumberOfPeople}
            />
          </div>
          <div className="flex w-[350px] grow flex-col justify-between rounded-2xl bg-cyan-900 px-8 py-10">
            <ResultAmount
              tipAmount={tipPerPerson}
              personAmount={personAmount}
            />
            <button
              className={`w-full rounded-sm border-none bg-cyan-500/80 py-2 text-cyan-900 hover:bg-cyan-500 mt-6 md:mt-0 disabled:cursor-not-allowed disabled:bg-grayish_cyan-700`}
              type="reset"
              disabled={
                !tip && !bill && !numberOfPeople && !customTip ? true : false
              }
              onClick={resetAll}
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
