import React, { Component } from 'react';
import RmButton from './RmButton';
import School from './School';

class Ed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
        <RmButton
          func={this.props.removeSchool}
          category="School"
          inputs={this.props.inputs}
          propName="education"
        />
      </div>
    );
  }
}

export default Ed;
