import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./utils/data";

const rpsContext = createContext();

const RpsContext = ({ children }) => {
  const randomOption = () => {
    return Math.floor(Math.random() * data.length);
  };
  const [start, setStart] = useState(false);
  const [option, setOption] = useState(1);
  const [cpOption, setCpOption] = useState(randomOption());
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => setStart(true);
  const chooseOption = (id) => {
    if (!start) return;
    setShowResult(false);
    setOption(id);
  };

  const toggleShowResult = () => {
    setShowResult(!showResult);
  };

  useEffect(() => {
    if (!showResult) return;
    const cp = randomOption();
    setCpOption(cp);
  }, [showResult]);

  return (
    <rpsContext.Provider
      value={{
        start,
        option,
        handleStart,
        chooseOption,
        showResult,
        toggleShowResult,
        cpOption,
      }}
    >
      {children}
    </rpsContext.Provider>
  );
};

export const useRpsContext = () => useContext(rpsContext);

export default RpsContext;
