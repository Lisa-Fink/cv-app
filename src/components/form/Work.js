import React, { Component } from 'react';

class Work extends Component {
  render() {
    const inputs = this.props.inputs;
    return (
      <div>
        <legend>Work Experience</legend>
        <div>
          <label htmlFor="company">Company Name</label>
          <input
            value={inputs.company}
            onChange={this.props.inputChange}
            id="company"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="title">Job Title</label>
          <input
            value={inputs.title}
            onChange={this.props.inputChange}
            id="title"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="startDate">Date started</label>
          <input
            value={inputs.startDate}
            onChange={this.props.inputChange}
            id="startDate"
            type="date"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">Date Ended</label>
          <input
            value={inputs.endDate}
            onChange={this.props.inputChange}
            id="endDate"
            type="date"
          ></input>
        </div>
      </div>
    );
  }
}

export default Work;
