import { useRpsContext } from "../context";
import Computer from "./Computer";
import Result from "./Result";
import User from "./User";

const Play = () => {
  const { showResult, toggleShowResult } = useRpsContext();
  return (
    <div>
      <h2 className="font-bold text-xl py-2 inline-block px-5 rounded-xl my-2 bg-red-100 border-2 border-red-400">
        Choose From Above Options
      </h2>
      <div className="flex flex-col sm:flex-row gap-y-5 flex-wrap justify-around py-5 items-center">
        <User />
        <div className="w-52 h-24">
          <button
            className="font-bold px-3 py-1 rounded-lg bg-red-400 text-white text-xl w-36"
            onClick={toggleShowResult}
          >
            {!showResult ? "Show Result" : "Play Again"}
          </button>
          {showResult && <Result />}
        </div>
        <Computer />
      </div>
    </div>
  );
};
export default Play;
