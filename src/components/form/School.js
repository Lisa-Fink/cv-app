import React, { Component } from 'react';

export default class School extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    const index = this.props.index;
    return (
      <div id="ed-start">
        <div>
          <label htmlFor={`education-school-${index}`}>School Name </label>
          <input
            value={inputs.education[index].school}
            onChange={this.props.inputChange}
            id={`education-school-${index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`education-degree-${index}`}>Degree Earned </label>
          <input
            value={inputs.education[index].degree}
            onChange={this.props.inputChange}
            id={`education-degree-${index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`education-major-${index}`}>Major </label>
          <input
            value={inputs.education[index].major}
            onChange={this.props.inputChange}
            id={`education-major-${index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor={`education-grad-${index}`}>Graduation Date </label>
          <input
            value={inputs.education[index].grad}
            onChange={this.props.inputChange}
            id={`education-grad-${index}`}
            type="text"
            required
          ></input>
        </div>
      </div>
    );
  }
}
