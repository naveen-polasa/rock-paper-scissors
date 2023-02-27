import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./utils/data";

const rpsContext = createContext();

const randomOption = () => {
  return Math.floor(Math.random() * data.length);
};

const RpsContext = ({ children }) => {
  const [start, setStart] = useState(false);
  const [option, setOption] = useState(1);
  const [cpOption, setCpOption] = useState(randomOption());
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setCpOption(randomOption());
  }, [showResult]);

  const handleStart = () => setStart(true);
  const chooseOption = (id) => {
    if (!start) return;
    setShowResult(false)
    setOption(id);
  };

  const toggleShowResult = () => {
    setShowResult(!showResult);
  };

  return (
    <rpsContext.Provider
      value={{
        start,
        option,
        handleStart,
        chooseOption,
        randomOption,
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
