import React from "react";
import './tile.component.scss';

function TileComponent({settings}) {

  return (
    <div className={`tile ${settings.color}`}>

    </div>
  )
}

export default TileComponent;