const DarkModeToggle = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-black text-white px-4 py-2 rounded-xl"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
