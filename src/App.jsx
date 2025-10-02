import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 font-sans p-6">
      {/* Logos */}
      <div className="flex gap-6 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="transform hover:scale-110 transition-transform"
        >
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="transform hover:scale-110 transition-transform"
        >
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Vite + React</h1>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-4 mb-6 w-80">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Count is {count}
        </button>
        <p className="text-center text-gray-600 text-sm">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Footer text */}
      <p className="text-gray-500 text-sm text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
