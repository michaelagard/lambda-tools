import React from 'react';
import { FormWrapper, FormTitle, FormInput } from './InputForm.styled';

function InputForm(props) {

	return (
    <FormWrapper>
      <FormTitle>{props.formName}</FormTitle>
      <FormInput type={props.type}
      name={props.name}
      maxLength={props.maxLength}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange.bind(props)} /> 
    </FormWrapper>
	)
}

export default InputForm;