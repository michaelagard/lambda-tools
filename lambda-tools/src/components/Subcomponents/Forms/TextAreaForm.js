import React from 'react';
import { FormWrapper, FormTitle, TextArea } from './TextAreaForm.styled';
function TextAreaForm(props) {

	return (
    <FormWrapper>
      <FormTitle>{props.formName}</FormTitle>
      <TextArea 
        resize={props.resize}
        width={props.width}
        maxLength={props.maxLength}
        value={props.inputText}
        placeholder={props.placeHolderText}
        onChange={props.handleInputText.bind(props)} /> 
    </FormWrapper>
	)
}

export default TextAreaForm;