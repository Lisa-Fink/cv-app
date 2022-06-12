import JobCv from './JobCv';
import SchoolCv from './SchoolCv';
import React from 'react';

function Content(props) {
  const inputs = props.inputs;

  const schools = inputs.education.map((school, index) => (
    <SchoolCv index={index} inputs={inputs} key={index} />
  ));
  const jobs = inputs.work.map((job, index) => (
    <JobCv index={index} inputs={inputs} key={index} />
  ));
  return (
    <div id="content">
      <h2>Work Experience</h2>
      {jobs}
      <h2>Education</h2>
      {schools}
    </div>
  );
}

export default Content;
