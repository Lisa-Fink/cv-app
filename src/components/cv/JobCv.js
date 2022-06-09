import React, { Component } from 'react';

export default class JobCv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const formatEndDate = (date) => {
      return date ? date : 'Present';
    };
    const inputs = this.props.inputs;
    const index = this.props.index;
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
}
