import React, { createContext, useState } from "react";
import GridComponent from "./../grid/grid.component";
import './tabletop.component.scss';

const ThemeContext = createContext("light");

const TabletopComponent = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div id="tabletop">
        <GridComponent />
      </div>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Light Theme</button>
      </div>
    </ThemeContext.Provider>    
  )
}

export default TabletopComponent;