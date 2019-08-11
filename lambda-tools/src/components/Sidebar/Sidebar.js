import React from 'react';
import { withRouter } from 'react-router-dom';
import { SideBarWrapper, SideBarH1, SideBarH3, SideBarLink } from "./Sidebar.styled";

function Sidebar() {
  return (
    <SideBarWrapper>
      <SideBarH1>Lambdorks</SideBarH1>
      <SideBarLink exact to={`/`}>Home</SideBarLink>
      <SideBarH3>Lambda Tools</SideBarH3>
      <SideBarLink exact to={`/random`}>
          1. Student Randomizer
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          2. Code Challenge Prompts
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          3. A Useful Tool
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          4. A Nice Thought
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          5. Student Notes
      </SideBarLink>
    </SideBarWrapper>
  );
}

export default withRouter(Sidebar);
