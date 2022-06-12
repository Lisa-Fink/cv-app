import React from 'react';

function School(props) {
  const inputs = props.inputs;
  const index = props.index;
  return (
    <div className="ed-start">
      <div>
        <label htmlFor={`education-school-${index}`}>School Name </label>
        <input
          value={inputs.education[index].school}
          onChange={props.inputChange}
          id={`education-school-${index}`}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`education-degree-${index}`}>Degree Earned </label>
        <input
          value={inputs.education[index].degree}
          onChange={props.inputChange}
          id={`education-degree-${index}`}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`education-major-${index}`}>Major </label>
        <input
          value={inputs.education[index].major}
          onChange={props.inputChange}
          id={`education-major-${index}`}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`education-grad-${index}`}>Graduation Date </label>
        <input
          value={inputs.education[index].grad}
          onChange={props.inputChange}
          id={`education-grad-${index}`}
          type="text"
          required
        ></input>
      </div>
    </div>
  );
}

export default School;
