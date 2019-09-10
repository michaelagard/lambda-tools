/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

import React from 'react';
import ToolTitle from '../Subcomponents/ToolTitle/ToolTitle';
import InputForm from '../Subcomponents/Forms/InputForm';
import TextAreaForm from '../Subcomponents/Forms/TextAreaForm';
import { Wrapper, CTAForm } from './StudentCTA.styled';
import {useCTAForm} from './CustomHook';
const titleData = {title: "Student CTAs", titleDescription: "For the truely lazy TL who just wants to prompt students to join their Zoom."}

function StudentCTA() {
  const {inputs, handleInputChange, handleSubmit} = useCTAForm();

  // const handleReplaceTextButton = (event) => {
  //   event.preventDefault();
  //   replaceKeyword("ZOOM_LINK", zoomLinkStr)
  // }

  // const replaceKeyword = (keyword, string) => {
  //   let modifiedStr = standUpStr.replace(keyword, string);
  //   setStandUpStr(modifiedStr);
  // }



  // const replaceStrVariable = (str, formStr) => {
  //   let replaceIndex = formStr.search(str) + str.length;
  //   moduleReviewAnnouncementStr.InsertAt(str, replaceIndex)
  //   setModuleReviewAnnouncementStr(moduleReviewAnnouncementStr)
  // }


  return (
    <Wrapper>
      <ToolTitle titleData={titleData}/>
      <CTAForm onSubmit={handleSubmit}>
        <InputForm formName="Starting Time"
          name="startTime"
          type="time"
          formClassName="cta-starting-time-input"
          value={inputs.startTimeStr}
          onChange={handleInputChange}
          placeholder={"HH:MM"}
          maxLength="8"/>

        <InputForm formName="Zoom Link"
          name="zoomLink"
          type="text"
          formClassName="cta-zoom-link-input"
          value={inputs.zoomLinkStr}
          onChange={handleInputChange}
          placeholder={"Paste Zoom Link Here"}
          maxLength="256"/>
          
        <InputForm formName="TK Topic"
          name="TKTopic"
          type="text"
          formClassName="cta-tk-topic-input"
          value={inputs.TKTopicStr}
          onChange={handleInputChange}
          placeholder={"Paste TK Topic Here"}
          maxLength="256"/>

        <TextAreaForm formName="Stand Up"
          name="standUpInput"
          formClassName="stand-up-input"
          value={inputs.standUpStr}
          onChange={handleInputChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="Module Review Announcement"
          name="moduleReviewAnnouncement"
          formClassName="module-review-accouncement-input"
          value={inputs.moduleReviewAnnouncementStr}
          onChange={handleInputChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="Module Review"
          name="moduleReview"
          formClassName="module-review-input"
          value={inputs.moduleReviewStr}
          onChange={handleInputChange}
          width={"45%"}
          resize={"none"}/>

        <TextAreaForm formName="TK Review"
          name="TKReview"
          formClassName="tk-review-input"
          inputText={inputs.tkPrepStr}
          onChange={handleInputChange}
          width={"45%"}
          resize={"none"}/>
      </CTAForm>
    </Wrapper>
  );
}

export default StudentCTA;
