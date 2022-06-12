import RmButton from './RmButton';
import School from './School';
import React from 'react';

function Ed(props) {
  const edDivs = props.inputs.education.map((school, index) => (
    <School
      key={index}
      inputs={props.inputs}
      index={index}
      inputChange={props.inputChange}
    />
  ));
  return (
    <div id="ed">
      <legend>Education</legend>
      {edDivs}

      <button onClick={props.addSchool}>Add School</button>
      <RmButton
        func={props.removeSchool}
        category="School"
        inputs={props.inputs}
        propName="education"
      />
    </div>
  );
}

export default Ed;
