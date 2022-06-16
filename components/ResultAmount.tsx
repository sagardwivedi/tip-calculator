import { NextPage } from "next";

type Props = {
  tipAmount: number;
  personAmount: number;
};

const ResultAmount: NextPage<Props> = ({ tipAmount, personAmount }) => {
  return (
    <div className="sm:w-72">
      <div className="result-container mb-6">
        <h5>
          Tip Amount <br />
          <span className="text-grayish_cyan-500">/person</span>
        </h5>
        <span className="text-4xl font-bold text-cyan-500">
          ${tipAmount.toFixed(2)}
        </span>
      </div>
      <div className="result-container">
        <h5>
          Total <br />
          <span className="text-grayish_cyan-500">/person</span>
        </h5>
        <span className="text-4xl font-bold text-cyan-500">
          ${personAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ResultAmount;
