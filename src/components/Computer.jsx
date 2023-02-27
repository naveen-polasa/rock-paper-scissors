import { useRpsContext } from "../context";
import { data } from "../utils/data";

const Computer = () => {
  const { showResult, cpOption } = useRpsContext();

  const { name, img } = data[cpOption];

  return (
    <div>
      <div
        className={`${"hover:scale-105 duration-300 hover:bg-red-200"}    border-2 border-red-400 bg-yellow-100 p-4
          m-4 rounded-3xl`}
      >
        {showResult ? (
          <div>
            <img src={img} alt={name} className="w-36 rounded-full" />
            <h3 className="capitalize text-xl text-center pt-2">{name}</h3>
          </div>
        ) : (
          <div className="h-44 flex justify-center items-center">
            <h3 className="text-2xl font-bold text-red-500">Confidential</h3>
          </div>
        )}
      </div>
      <h3 className="font-bold inline-block px-3 py-1 rounded-lg bg-red-400 text-white ">
        COMPUTER
      </h3>
    </div>
  );
};
export default Computer;
