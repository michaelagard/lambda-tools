import React from 'react';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import { Wrapper } from './Home.styled';

const titleData = {title: "Home", titleDescription: "This site was created to help with some of the basic functions of Lambda's team leads by automating the boring stuff. I'll be adding more tools as I identify future tasks I can automate and as my skills improve."}
function Home() {
  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
    </Wrapper>
  );
}

export default Home;
