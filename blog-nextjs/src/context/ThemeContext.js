"use client";

import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

// burası en geniş katman burada child alıyor ve buna sarılıyor bütün veriler. ThemeContext aracılığıyla
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // styled-components için tema ayarları
  const themeSettings = theme === "light"
    ? { backgroundColor: "#fff", color: "#333" }
    : { backgroundColor: "#333", color: "#fff" };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeSettings}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}


// Burası Butonun etkileşim sağlaması için yapıldı.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
