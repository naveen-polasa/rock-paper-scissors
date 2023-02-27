import { data } from "../utils/data";
import SingleOption from "./SingleOption";

const Options = () => {
  
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((option) => {
        return <SingleOption key={option.id} {...option} />;
      })}
    </div>
  );
};
export default Options;
