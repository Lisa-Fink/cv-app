import React, { Component } from 'react';
import '../../styles/content.css';

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
        <div id="education">
          <h2>Education</h2>
          <div id="school">{inputs.school}</div>
          <div>Degree Earned: {inputs.degree}</div>
          <div>Major: {inputs.major}</div>
          <div>Graduated: {inputs.grad}</div>
        </div>
      </div>
    );
  }
}
