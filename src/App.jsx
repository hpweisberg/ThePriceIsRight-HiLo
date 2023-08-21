import GameContainer from "./Components/GameContainer";

function App() {

  return (
    <main className="app">
      <h1 className="text-center text-8xl">Hi Lo</h1>
      <h4 className="m-4 text-slate-50/60">Select the 3 highest prices items to win</h4>
      <GameContainer />
    </main>
  );
}

export default App;
