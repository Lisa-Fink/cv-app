import React, { Component } from 'react';
import School from './School';

class Ed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const inputs = this.props.inputs;

    const edDivs = this.props.inputs.education.map((school, index) => (
      <School
        key={index}
        inputs={this.props.inputs}
        index={index}
        inputChange={this.props.inputChange}
      />
    ));

    return (
      <div id="ed">
        <legend>Education</legend>
        {edDivs}

        <button onClick={this.props.addSchool}>Add School</button>
      </div>
    );
  }
}

export default Ed;
