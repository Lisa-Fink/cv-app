import React, { Component } from 'react';
import Job from './Job';
import RmButton from './RmButton';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const jobDivs = this.props.inputs.work.map((job, index) => (
      <Job
        key={index}
        inputs={this.props.inputs}
        index={index}
        inputChange={this.props.inputChange}
      />
    ));
    return (
      <div>
        <legend>Work Experience</legend>
        {jobDivs}
        <button onClick={this.props.addJob}>Add Job</button>
        <RmButton
          func={this.props.removeJob}
          category="Job"
          inputs={this.props.inputs}
          propName="work"
        />
      </div>
    );
  }
}

export default Work;
