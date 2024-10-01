/* eslint-disable react/prop-types */
import { createContext,  useState, useEffect } from "react";
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const currentTheme = localStorage.getItem("current_theme");
    const [theme, setTheme] = useState(currentTheme  ? currentTheme  : "light");
  
    useEffect(() => {
      // apply the preffered theme to the whole body
      document.body.className = theme
      localStorage.setItem("current_theme", theme);
    }, [theme]);

    return <ThemeContext.Provider value={{setTheme, theme}}>
       {children}
    </ThemeContext.Provider>
}
