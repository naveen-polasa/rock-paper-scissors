import { useRpsContext } from "../context";
import { checkResult } from "../utils/data";

const Result = () => {
  let { option, cpOption, showResult } = useRpsContext();
  if (!showResult) return;
  const final = checkResult(option, cpOption + 1);
  return (
    <div>
      <h4 className="font-bold my-2 text-2xl font-mono border-2 border-red-400 rounded-xl bg-orange-200"> {final}</h4>
    </div>
  );
};
export default Result;
