import React from 'react';
import { FormWrapper, FormTitle, TextArea } from './TextAreaForm.styled';
function TextAreaForm(props) {

	return (
    <FormWrapper>
      <FormTitle>{props.formName}</FormTitle>
      <TextArea maxLength={props.maxLength} value={props.inputText} placeholder={props.placeHolderText} onChange={props.handleInputText.bind(props)} /> 
    </FormWrapper>
	)
}

export default TextAreaForm;