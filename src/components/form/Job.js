import React, { Component } from 'react';

export default class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    const index = this.props.index;
    return (
      <div className="job-start">
        <div>
          <label htmlFor={`work-company-${index}`}>Company Name</label>
          <input
            value={inputs.work[index].company}
            onChange={this.props.inputChange}
            id={`work-company-${index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`work-title-${index}`}>Job Title</label>
          <input
            value={inputs.work[index].title}
            onChange={this.props.inputChange}
            id={`work-title-${index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`work-startDate-${index}`}>Date started</label>
          <input
            value={inputs.work[index].startDate}
            onChange={this.props.inputChange}
            id={`work-startDate-${index}`}
            type="date"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`work-endDate-${index}`}>Date Ended</label>
          <input
            value={inputs.work[index].endDate}
            onChange={this.props.inputChange}
            id={`work-endDate-${index}`}
            type="date"
          ></input>
        </div>
      </div>
    );
  }
}
