import React from 'react';
import { withRouter } from 'react-router-dom';
import { SideBarWrapper, SideBarH1, SideBarH3, SideBarLink } from "./Sidebar.styled";

function Sidebar() {
  return (
    <SideBarWrapper>
      <SideBarH1>Lambdork</SideBarH1>
      <SideBarLink exact to={`/`}>Home</SideBarLink>
      <SideBarH3>Lambda Tools</SideBarH3>
      <SideBarLink exact to={`/random`}>
          Student Randomizer
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          Code Challenge Prompts
      </SideBarLink>
      <SideBarLink exact to={`/studentcta`}>
          Student CTA
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          A Nice Thought
      </SideBarLink>
      <SideBarLink exact to={`iwontwork`}>
          Student Notes
      </SideBarLink>
    </SideBarWrapper>
  );
}

export default withRouter(Sidebar);
