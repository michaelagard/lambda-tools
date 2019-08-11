import React from 'react';
import { FormWrapper, FormTitle, FormInput } from './InputForm.styled';

function InputForm(props) {

	return (
    <FormWrapper>
      <FormTitle>{props.formName}</FormTitle>
      <FormInput type={props.type} maxLength={props.maxLength} value={props.inputText} placeholder={props.placeHolderText} onChange={props.handleInputText.bind(props)} /> 
    </FormWrapper>
	)
}

export default InputForm;