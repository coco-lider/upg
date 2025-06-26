import { Search, ShoppingCart, User, Heart } from "lucide-react";
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";
import ThemeToggle from "./ThemeToggle";
import { useAppContext } from "../context/AppProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { darkMode, themeClasses } = useAppContext();
  const {
    headerBg,
    border,
    text,
    inputBg,
    inputBorder,
    textMuted,
    textSecondary,
  } = themeClasses;

  return (
    <header
      className={`border-b ${border} ${headerBg} backdrop-blur-sm sticky top-0 z-50`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <Link to={'/'}>
                <img
                  className={`w-[150px] h-[20px] ${
                    darkMode ? "block" : "hidden"
                  }`}
                  src={logo}
                  alt="logo"
                />
                <img
                  className={`w-[150px] h-[20px] ${
                    darkMode ? "hidden" : "block"
                  }`}
                  src={logo2}
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textMuted} w-4 h-4`}
              />
              <input
                type="text"
                placeholder="Qidiruv..."
                className={`w-full pl-10 pr-4 py-2 ${inputBg} border ${inputBorder} rounded-md ${text} placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors`}
              />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <ThemeToggle />
            <button
              className={`flex items-center space-x-2 ${textSecondary} hover:text-pink-500`}
            >
              <User className="w-4 h-4" />
              <span>Kirish</span>
            </button>
            <button
              className={`flex items-center space-x-2 ${textSecondary} hover:text-pink-500`}
            >
              <Heart className="w-4 h-4" />
              <span>Sevimlilar</span>
            </button>
            <button
              className={`flex items-center space-x-2 ${textSecondary} hover:text-pink-500`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Savatcha</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
