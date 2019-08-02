import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="side-bar">
      <Link to={`randomizer`}>Randomizer</Link>
    </div>
  );
}

export default Sidebar;
