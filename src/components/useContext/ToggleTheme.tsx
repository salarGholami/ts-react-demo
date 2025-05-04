import { useDarkMode } from "./DarkModeContext";

const ToggleTheme = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  return (
    <div>
      <p>the theme is {isDarkMode ? "Dark" : " Light"}</p>
      <button onClick={toggleDarkMode}>toggleTheme</button>
    </div>
  );
};
export default ToggleTheme;
