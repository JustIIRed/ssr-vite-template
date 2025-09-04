import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/vite.svg"
            className="logo w-20 h-20 transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="logo react w-20 h-20 transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-4">Vite + React</h1>
      <div className="card w-96 bg-base-100 shadow-xl mb-6">
        <div className="card-body items-center">
          <button
            className="btn btn-primary mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-sm text-base-content">
            Edit{" "}
            <code className="bg-base-300 rounded px-2 py-1">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
      </div>
      <p className="read-the-docs text-base-content text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
