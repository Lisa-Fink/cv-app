import React, { Component } from 'react';

export default class School extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    return (
      <div id="ed-start">
        <div>
          <label htmlFor="school">School Name </label>
          <input
            value={inputs.education[this.props.index].school}
            onChange={this.props.inputChange}
            id={`education-school-${this.props.index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="degree">Degree Earned </label>
          <input
            value={inputs.education[this.props.index].degree}
            onChange={this.props.inputChange}
            id={`education-degree-${this.props.index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="major">Major </label>
          <input
            value={inputs.education[this.props.index].major}
            onChange={this.props.inputChange}
            id={`education-major-${this.props.index}`}
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="grad">Graduation Date </label>
          <input
            value={inputs.education[this.props.index].grad}
            onChange={this.props.inputChange}
            id={`education-grad-${this.props.index}`}
            type="text"
            required
          ></input>
        </div>
      </div>
    );
  }
}
