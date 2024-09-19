import { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider({ children }) {
    const [appTheme, setAppTheme] = useState("light");
    return (
        <themeContext.Provider value={{ appTheme, setAppTheme }}>
            {children}
        </themeContext.Provider>
    );
}

export default ThemeContextProvider;