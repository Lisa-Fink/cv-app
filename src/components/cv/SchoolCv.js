import React, { Component } from 'react';

export default class SchoolCv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    const index = this.props.index;
    return (
      <div className="education">
        <div id="school">{inputs.education[index].school}</div>
        <div>Degree Earned: {inputs.education[index].degree}</div>
        <div>Major: {inputs.education[index].major}</div>
        <div>Graduated: {inputs.education[index].grad}</div>
      </div>
    );
  }
}
