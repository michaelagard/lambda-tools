import React from 'react';
import { NavLink, withRouter } from "react-router-dom";

function Sidebar() {
  return (
    <div className="side-bar">
      <h1>Lambdorks</h1>
      <NavLink exact to={`/`}>Home</NavLink>
      <h3>Lambda Tools</h3>
      <NavLink exact to={`/random`}
        activeClassName="active">
          1. Student Randomizer
      </NavLink>
      <NavLink exact to={`iwontwork`}
        activeClassName="active">
          2. Code Challenge Prompts
      </NavLink>
      <NavLink exact to={`iwontwork`}
        activeClassName="active">
          3. Greeting Generators
      </NavLink>
      <NavLink exact to={`iwontwork`}
        activeClassName="active">
          4. Who Knows
      </NavLink>
      <NavLink exact to={`iwontwork`}
        activeClassName="active">
          5. Student Notes
      </NavLink>
    </div>
  );
}

export default withRouter(Sidebar);
