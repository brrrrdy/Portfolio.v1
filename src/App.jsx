import "./index.css";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900 text-white">
      <div id="top" className="h-px w-full relative" />

      <Colors />

      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Portfolio Coming Soon</h1>
      </div>
    </div>
  );
}

export default App;
