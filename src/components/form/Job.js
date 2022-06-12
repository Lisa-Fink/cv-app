import React from 'react';

function Job(props) {
  const inputs = props.inputs;
  const index = props.index;
  return (
    <div className="job-start">
      <div>
        <label htmlFor={`work-company-${index}`}>Company Name</label>
        <input
          value={inputs.work[index].company}
          onChange={props.inputChange}
          id={`work-company-${index}`}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`work-title-${index}`}>Job Title</label>
        <input
          value={inputs.work[index].title}
          onChange={props.inputChange}
          id={`work-title-${index}`}
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`work-startDate-${index}`}>Date started</label>
        <input
          value={inputs.work[index].startDate}
          onChange={props.inputChange}
          id={`work-startDate-${index}`}
          type="date"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={`work-endDate-${index}`}>Date Ended</label>
        <input
          value={inputs.work[index].endDate}
          onChange={props.inputChange}
          id={`work-endDate-${index}`}
          type="date"
        ></input>
      </div>
    </div>
  );
}

export default Job;
