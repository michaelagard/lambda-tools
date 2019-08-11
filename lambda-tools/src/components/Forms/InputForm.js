import React from 'react';

function InputForm(props) {

	return (
    <div className={props.formClassName}>
      <h4>{props.formName}</h4>
      <input type={props.type} maxLength={props.maxLength} value={props.inputText} placeholder={props.placeHolderText} onChange={props.handleInputText.bind(props)} /> 
    </div>
	)
}

export default InputForm;