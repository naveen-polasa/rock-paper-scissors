import { useRpsContext } from "../context";
import Options from "./Options";
import Play from "./Play";

const Home = () => {
  const { handleStart, start } = useRpsContext();

  return (
    <section>
      <div className="flex justify-center">
        <Options />
      </div>
      <div className="text-center mx-auto">
        {!start ? (
          <button
            className="py-2 px-3 border-2 bg-red-400 text-white rounded-xl text-xl border-red-400 hover:scale-110 hover:bg-orange-400 duration-300"
            onClick={handleStart}
          >
            Let's Play
          </button>
        ) : (
          <Play />
        )}
      </div>
    </section>
  );
};
export default Home;
