import React from 'react';
import ToolTitle from '../ToolTitle/ToolTitle';
function Home() {
  const titleData = {title: "Home", titleDescription: "This site was created to help with some of the basic functions of Lambda's team leads by automating the boring stuff. I'll be adding more tools as I identify future tasks I can automate and as my skills improve."}
  return (
    <div className="home">
      <ToolTitle titleData={titleData}/>
    </div>
  );
}

export default Home;
