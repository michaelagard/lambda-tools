import React from 'react';
function Form(props) {

	return (
    <div className={props.formClassName}>
      <h4>{props.formName}</h4>
      <textarea value={props.inputText} placeholder={props.placeHolderText} onChange={props.handleInputText.bind(props)} /> 
    </div>
	)
}

export default Form;