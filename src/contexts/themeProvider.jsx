import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}