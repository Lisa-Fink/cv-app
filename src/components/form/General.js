import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    return (
      <div id="general">
        <legend>General Information</legend>
        <div>
          <label htmlFor="name">Full Name </label>
          <input
            value={inputs.name}
            onChange={this.props.inputChange}
            id="name"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title </label>
          <input
            value={inputs.jobTitle}
            onChange={this.props.inputChange}
            id="jobTitle"
            type="text"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            value={inputs.email}
            onChange={this.props.inputChange}
            id="email"
            type="email"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone </label>
          <input
            value={inputs.phone}
            onChange={this.props.inputChange}
            id="phone"
            type="tel"
            minLength="9"
            maxLength="9"
            required
          ></input>
        </div>
      </div>
    );
  }
}

export default General;
