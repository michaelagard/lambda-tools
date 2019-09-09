/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

import React, { useState } from 'react';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import InputForm from '../Subcomponents/Forms/InputForm';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import { Wrapper, CTAForm } from './StudentCTA.styled';
import { standUpStrData, moduleReviewAnnouncementStrData, moduleReviewStrData, tkPrepStrData } from './Data/StudentCTAData';
import Button from '../Subcomponents/Button/Button';

const titleData = {title: "Student CTAs", titleDescription: "For the truely lazy TL who just wants to prompt students to join their Zoom."}

function StudentCTA() {

  const [zoomLinkStr, setZoomLinkStr] = useState("");
  const [startTimeStr, setStartTimeStr] = useState("");
  const [TKTopicStr, setTKTopicStr] = useState("");

  const [standUpStr, setStandUpStr ] = useState(standUpStrData);
  const [moduleReviewAnnouncementStr, setModuleReviewAnnouncementStr] = useState(moduleReviewAnnouncementStrData);
  const [moduleReviewStr, setModuleReviewStr] = useState(moduleReviewStrData);
  const [tkPrepStr, setTKPrepStr] = useState(tkPrepStrData);

  const handleZoomLinkStr = (event) => { setZoomLinkStr(event.target.value); }
  const handleStartTimeStr = (event) => { setStartTimeStr(event.target.value); }
  const handleTKTopicStr = (event) => { setTKTopicStr(event.target.value); }
  const handleStandUpStrChange = (event) => { setStandUpStr(event.target.value); }
  const handleModuleReviewAnnouncementStrChange = (event) => { setModuleReviewAnnouncementStr(event.target.value); }
  const handleModuleReviewStrChange = (event) => { setModuleReviewStr(event.target.value); }
  const handleTKPrepChange = (event) => { setTKPrepStr(event.target.value); }

  // const handleReplaceTextButton = (event) => {
  //   event.preventDefault();
  //   replaceKeyword(keyword, string)
  // }

  const replaceKeyword = () => {
    let modifiedStr = standUpStr.replace("ZOOM_LINK", zoomLinkStr);
    setStandUpStr(modifiedStr);
  }

  // String.prototype.InsertAt=function(StrToInsert,Position){
  //   return this.slice(0,Position) + StrToInsert + this.slice(Position)
  // }

  // const replaceStrVariable = (str, formStr) => {
  //   let replaceIndex = formStr.search(str) + str.length;
  //   moduleReviewAnnouncementStr.InsertAt(str, replaceIndex)
  //   setModuleReviewAnnouncementStr(moduleReviewAnnouncementStr)
  // }


  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
      <CTAForm>
        <InputForm formName="Starting Time"
          type="time"
          formClassName="cta-starting-time-input"
          inputText={startTimeStr}
          handleInputText={handleStartTimeStr}
          placeHolderText={"HH:MM"}
          maxLength="8"/>

        <InputForm formName="Zoom Link"
          type="text"
          formClassName="cta-zoom-link-input"
          inputText={zoomLinkStr}
          handleInputText={handleZoomLinkStr}
          placeHolderText={"Paste Zoom Link Here"}
          maxLength="256"/>
          
        <InputForm formName="TK Topic"
          type="text"
          formClassName="cta-tk-topic-input"
          inputText={TKTopicStr}
          handleInputText={handleTKTopicStr}
          placeHolderText={"Paste TK Topic Here"}
          maxLength="256"/>

        <TextAreaForm formName="Stand Up"
          formClassName="stand-up-input"
          inputText={standUpStr}
          handleInputText={handleStandUpStrChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="Module Review Announcement"
          formClassName="module-review-accouncement-input"
          inputText={moduleReviewAnnouncementStr}
          handleInputText={handleModuleReviewAnnouncementStrChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="Module Review"
          formClassName="module-review-input"
          inputText={moduleReviewStr}
          handleInputText={handleModuleReviewStrChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="TK Review"
          formClassName="tk-review-input"
          inputText={tkPrepStr}
          handleInputText={handleTKPrepChange}
          width={"45%"}
          resize={"none"}/>
        {/* <Button onClickAction={handleTest}
          title={"Test"}/> */}
      </CTAForm>
    </Wrapper>
  );
}

export default StudentCTA;
