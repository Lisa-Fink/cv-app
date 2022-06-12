import React from 'react';

function SchoolCv(props) {
  const inputs = props.inputs;
  const index = props.index;
  return (
    <div className="education">
      <div id="school">{inputs.education[index].school}</div>
      <div>Degree Earned: {inputs.education[index].degree}</div>
      <div>Major: {inputs.education[index].major}</div>
      <div>Graduated: {inputs.education[index].grad}</div>
    </div>
  );
}

export default SchoolCv;
