import React, { Component } from 'react';
import SchoolCv from './SchoolCv';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const formatEndDate = (date) => {
      return date ? date : 'Present';
    };
    const inputs = this.props.inputs;

    const schools = inputs.education.map((school, index) => (
      <SchoolCv index={index} inputs={inputs} key={index} />
    ));
    return (
      <div id="content">
        <div id="experience">
          <h2>Work Experience</h2>
          <div id="company">Company Name: {inputs.company}</div>
          <div>Job Title: {inputs.title}</div>
          <div>
            Dates Employed: {inputs.startDate} - {formatEndDate(inputs.endDate)}
          </div>
        </div>
        <h2>Education</h2>
        {schools}
      </div>
    );
  }
}
