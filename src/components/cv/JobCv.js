import React from 'react';

function JobCv(props) {
  const formatEndDate = (date) => {
    return date ? date : 'Present';
  };
  const inputs = props.inputs;
  const index = props.index;
  return (
    <div className="experience">
      <div id="company">Company Name: {inputs.work[index].company}</div>
      <div>Job Title: {inputs.work[index].title}</div>
      <div>
        Dates Employed: {inputs.work[index].startDate} -{' '}
        {formatEndDate(inputs.work[index].endDate)}
      </div>
    </div>
  );
}

export default JobCv;
