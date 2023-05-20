import React, { createContext, useState } from "react";
import GridComponent from "./../grid/grid.component";
import { ThemeContext } from "./../../contexts/contexts";
import './tabletop.component.scss';

const TabletopComponent = () => {
  const [theme, setTheme] = useState("light");

  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <div id="tabletop">
          <GridComponent />
        </div>
      </ThemeContext.Provider> 
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Light Theme</button>
      </div>
    </React.Fragment>
  )
}

export default TabletopComponent;