import { useRpsContext } from "../context";
import { data } from "../utils/data";
import SingleOption from "./SingleOption";

const User = () => {
  const { option } = useRpsContext();
  if (!option) return;
  return (
    <div>
      <SingleOption {...data[option - 1]} />
      <h3 className="font-bold inline-block px-3 py-1 rounded-lg bg-red-400 text-white">USER</h3>
    </div>
  );
};
export default User;
