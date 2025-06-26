import { Moon, Sun } from "lucide-react";
import { useAppContext } from "../context/AppProvider";

export default function ThemeToggle() {
  const { darkMode, setDarkMode, themeClasses } = useAppContext();
  const { textSecondary } = themeClasses;

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`flex items-center space-x-2 ${textSecondary} hover:text-pink-500`}
    >
      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span>{darkMode ? "Light" : "Dark"}</span>
    </button>
  );
}
