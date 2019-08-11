import React from 'react';

function TextAreaForm(props) {

	return (
    <div className={props.formClassName}>
      <h4>{props.formName}</h4>
      <textarea maxLength={props.maxLength} value={props.inputText} placeholder={props.placeHolderText} onChange={props.handleInputText.bind(props)} /> 
    </div>
	)
}

export default TextAreaForm;