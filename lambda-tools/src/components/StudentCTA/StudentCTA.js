/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

import React, { useState } from 'react';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import InputForm from '../Subcomponents/Forms/InputForm';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import { Wrapper, CTAForm } from './StudentCTA.styled';
const titleData = {title: "Student CTAs", titleDescription: "For the truely lazy TL who just wants to prompt students to join their Zoom."}

function StudentCTA() {

  const [moduleAssignmentStr, setModuleAssignmentStr] = useState("");
  const [standUpStr, setStandUpStr ] = useState("@channel\nPlease join me for your daily stand up meeting!\n\n1. What did you do today?\n2. Did you make great progress?\n3. Any blockers you had to overcome?\n4. Are you stuck on something currently?\n\nZOOM_LINK");
  const [moduleReviewAnnouncementStr, setModuleReviewAnnouncementStr] = useState("@channel\nToday I'll be conducting our module reviews for the assignment `MODULE_ASSIGNMENT`. Below are the times I've randomly generated through ");
  const [moduleReviewStr, setModuleReviewStr] = useState("Are you prepared for your 1:1, STUDENT_NAME?\nZOOM_LINK");
  const [tkPrepStr, setTKPrepStr] = useState("@channel\nToday we'll be going over TK_TOPIC that the instructor will go over.\nZOOM_LINK");
  
  const handleModuleAssignmentStr = (event) => { setModuleAssignmentStr(event.target.value); }

  const handleStandUpStrChange = (event) => { setStandUpStr(event.target.value); }
  const handleModuleReviewAnnouncementStrChange = (event) => { setModuleReviewAnnouncementStr(event.target.value); }
  const handleModuleReviewStrChange = (event) => { setModuleReviewStr(event.target.value); }
  const handleTKPrepChange = (event) => { setTKPrepStr(event.target.value); replaceStrVariable(moduleAssignmentStr, moduleReviewAnnouncementStr) }


  // String.prototype.InsertAt=function(StrToInsert,Position){
  //   return this.slice(0,Position) + StrToInsert + this.slice(Position)
  // }

  const replaceStrVariable = (str, formStr) => {
    let replaceIndex = formStr.search(str) + str.length;
    moduleReviewAnnouncementStr.InsertAt(str, replaceIndex)
    setModuleReviewAnnouncementStr()
  }

  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
      <CTAForm>
        <InputForm formName="Starting Time"
          type="text"
          formClassName="randomizer-time-form"
          inputText={moduleAssignmentStr}
          handleInputText={handleModuleAssignmentStr}
          placeHolderText={"HH:MM"}
          maxLength="8"
          />
        <TextAreaForm formName="Stand Up"
          formClassName="randomizer-names-form"
          inputText={standUpStr}
          handleInputText={handleStandUpStrChange}
          placeHolderText={""}
          width={"100%"}
          resize={"none"}/>
        <TextAreaForm formName="Module Review Announcement"
          formClassName="randomizer-names-form"
          inputText={moduleReviewAnnouncementStr}
          handleInputText={handleModuleReviewAnnouncementStrChange}
          placeHolderText={"Seperate names by a newline"}
          width={"100%"}
          resize={"none"}/>
        <TextAreaForm formName="Module Review"
          formClassName="randomizer-names-form"
          inputText={moduleReviewStr}
          handleInputText={handleModuleReviewStrChange}
          placeHolderText={"Seperate names by a newline"}
          width={"100%"}
          resize={"none"}/>
        <TextAreaForm formName="TK Review"
          formClassName="randomizer-names-form"
          inputText={tkPrepStr}
          handleInputText={handleTKPrepChange}
          placeHolderText={"Seperate names by a newline"}
          width={"100%"}
          resize={"none"}/>
      </CTAForm>
    </Wrapper>
  );
}

export default StudentCTA;
