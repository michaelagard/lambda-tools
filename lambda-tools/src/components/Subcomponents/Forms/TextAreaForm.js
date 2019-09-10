import React from 'react';
import { FormWrapper, FormTitle, TextArea } from './TextAreaForm.styled';
function TextAreaForm(props) {

	return (
    <FormWrapper>
      <FormTitle>{props.formName}</FormTitle>
      <TextArea 
        name={props.name}
        resize={props.resize}
        width={props.width}
        maxLength={props.maxLength}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange} /> 
    </FormWrapper>
	)
}

export default TextAreaForm;