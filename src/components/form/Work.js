import Job from './Job';
import RmButton from './RmButton';
import React from 'react';

function Work(props) {
  const jobDivs = props.inputs.work.map((job, index) => (
    <Job
      key={index}
      inputs={props.inputs}
      index={index}
      inputChange={props.inputChange}
    />
  ));
  return (
    <div>
      <legend>Work Experience</legend>
      {jobDivs}
      <button onClick={props.addJob}>Add Job</button>
      <RmButton
        func={props.removeJob}
        category="Job"
        inputs={props.inputs}
        propName="work"
      />
    </div>
  );
}

export default Work;
