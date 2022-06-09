import React, { Component } from 'react';

class Ed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    return (
      <div>
        <legend>Education</legend>
        <div>
          <label htmlFor="school">School Name </label>
          <input
            value={inputs.school}
            onChange={this.props.inputChange}
            id="school"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="degree">Degree Earned </label>
          <input
            value={inputs.degree}
            onChange={this.props.inputChange}
            id="degree"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="major">Major </label>
          <input
            value={inputs.major}
            onChange={this.props.inputChange}
            id="major"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="grad">Graduation Date </label>
          <input
            value={inputs.grad}
            onChange={this.props.inputChange}
            id="grad"
            type="text"
            required
          ></input>
        </div>
      </div>
    );
  }
}

export default Ed;
