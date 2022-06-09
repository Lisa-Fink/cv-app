import React, { Component } from 'react';
import JobCv from './JobCv';
import SchoolCv from './SchoolCv';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const inputs = this.props.inputs;

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
}
