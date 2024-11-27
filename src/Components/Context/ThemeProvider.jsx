import React from "react";

import NavBar from "../NavBar";

// Create context with a default value
const ThemeContext = React.createContext();

const ThemeProvider = () => {
  const [theme, setTheme] = React.useState(false); // Manage theme state
  console.log(theme);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavBar/>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext }; // Export both provider and context


