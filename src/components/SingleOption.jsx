import { useRpsContext } from "../context";

const SingleOption = ({ id, name, img }) => {
  const { start, chooseOption} = useRpsContext();
  return (
    <div
      className={`${
        start && "hover:scale-105 duration-300 hover:bg-red-200"
      }    border-2 border-red-400 bg-yellow-100 p-4
          m-4 rounded-3xl`}
      onClick={() => chooseOption(id)}
    >
      <div>
        <img src={img} alt={name} className="w-36 rounded-full" />
        <h3 className="capitalize text-xl text-center pt-2 font-semibold">{name}</h3>
      </div>
    </div>
  );
};
export default SingleOption;
