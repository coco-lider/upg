import React, { createContext, useContext, useEffect, useState } from "react";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const themeClasses = {
    bg: darkMode ? "bg-black" : "bg-white",
    text: darkMode ? "text-white" : "text-gray-900",
    headerBg: darkMode ? "bg-black/95" : "bg-white/95",
    border: darkMode ? "border-gray-800" : "border-gray-200",
    cardBg: darkMode ? "bg-gray-900" : "bg-white",
    cardBorder: darkMode ? "border-gray-800" : "border-gray-200",
    cardHover: darkMode ? "hover:border-pink-500" : "hover:border-pink-400",
    inputBg: darkMode ? "bg-gray-900" : "bg-gray-100",
    inputBorder: darkMode ? "border-gray-700" : "border-gray-300",
    heroBg: darkMode
      ? "from-gray-900 via-black to-gray-900"
      : "from-gray-100 via-white to-gray-100",
    textSecondary: darkMode ? "text-gray-300" : "text-gray-600",
    textMuted: darkMode ? "text-gray-400" : "text-gray-500",
  };

  return (
    <appContext.Provider value={{themeClasses,darkMode,setDarkMode}}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
