import Home from "./components/Home";

function App() {
  return (
    <div className="bg-green-200 min-h-screen min-w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-2xl font-bold py-3 ">
          <h2 className="border-2 border-red-500 bg-orange-100 inline-block px-5 py-2 rounded-xl">
            ROCK, PAPER and SCISSORS
          </h2>
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
