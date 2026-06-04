import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 min-h-screen text-white"
          : "bg-gray-100 min-h-screen"
      }
    >
      <Dashboard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;