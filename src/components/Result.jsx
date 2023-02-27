import { useRpsContext } from "../context";
import { checkResult } from "../utils/data";

const Result = () => {
  let { option, cpOption } = useRpsContext();
  cpOption = cpOption + 1;
  console.log(option,cpOption)
  const { final, desc } = checkResult(option, cpOption);

  return (
    <div className="">
      <h4 className="font-bold my-2 text-2xl"> {final}</h4>
    </div>
  );
};
export default Result;
