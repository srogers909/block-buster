import React, { useContext } from "react";
import { ThemeContext } from "./../../contexts/contexts";
import TileComponent from "../tile/tile.component";
import './grid.component.scss';

const GridComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme}>
            <TileComponent settings={{color: 'red'}} />
        </div>
    );
}

export default GridComponent;