import React, { useState } from 'react';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import { Wrapper } from './StudentCTA.styled';
const titleData = {title: "Student CTAs", titleDescription: "For the truely lazy TL who just wants to prompt students to join their Zoom."}

function StudentCTA() {
  const [formStr, setFormStr] = useState({
    standUpStr: "@channel\nPlease join me for your daily stand up meeting!\n\n1. What did you do today?\n2. Did you make great progress?\n3. Any blockers you had to overcome?\n4. Are you stuck on something currently?\n\nZOOM_LINK",
    moduleReviewAnnouncementStr: "@channel\nToday I'll be conducting our module reviews for the assignment `MODULE_ASSIGNMENT`. Below are the times I've randomly generated through ",
    moduleReviewStr: "Are you prepared for your 1:1, STUDENT_NAME?\nZOOM_LINK",
    tkPrepStr: "@channel\nToday we'll be going over TK_TOPIC that the instructor will go over.\nZOOM_LINK"
  })

  const handleStandUpStrChange = (event) => { setFormStr.standUpStr(event.target.value); }
  
  const handleOneOnOneStrChange = (event) => { setFormStr.setModuleReviewStr(event.target.value); }
  const handleTKPrepChange = (event) => { setFormStr.tkPrepStr(event.target.value); }
  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
      <TextAreaForm formName="Stand Up"
        formClassName="randomizer-names-form"
        inputText={formStr.standUpStr}
        handleInputText={handleStandUpStrChange}
        placeHolderText={"Seperate names by a newline"}
        width={"100%"}
        resize={"none"}/>
      <TextAreaForm formName="Module Review Announcement"
        formClassName="randomizer-names-form"
        inputText={formStr.moduleReviewAnnouncementStr}
        handleInputText={handleOneOnOneStrChange}
        placeHolderText={"Seperate names by a newline"}
        width={"100%"}
        resize={"none"}/>
      <TextAreaForm formName="Module Review"
        formClassName="randomizer-names-form"
        inputText={formStr.moduleReviewStr}
        handleInputText={handleOneOnOneStrChange}
        placeHolderText={"Seperate names by a newline"}
        width={"100%"}
        resize={"none"}/>
      <TextAreaForm formName="TK Review"
        formClassName="randomizer-names-form"
        inputText={formStr.tkPrepStr}
        handleInputText={handleTKPrepChange}
        placeHolderText={"Seperate names by a newline"}
        width={"100%"}
        resize={"none"}/>
    </Wrapper>
  );
}

export default StudentCTA;
