import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="side-bar">
      <Link to={`/`}>Home</Link>
      <Link to={`random`}>Randomizer</Link>
    </div>
  );
}

export default Sidebar;
