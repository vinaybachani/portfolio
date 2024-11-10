"use client"
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
