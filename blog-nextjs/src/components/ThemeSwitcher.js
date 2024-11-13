"use client"; // Client component olarak işaretle

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}
