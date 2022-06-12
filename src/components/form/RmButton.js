import React from 'react';

function RmButton(props) {
  const button = <button onClick={props.func}>Remove {props.category}</button>;

  const showButton = props.inputs[props.propName].length > 1 ? button : null;
  return showButton;
}

export default RmButton;
