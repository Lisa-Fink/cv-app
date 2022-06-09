import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <legend>General Information</legend>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" required></input>

        <label htmlFor="job-title">Job Title</label>
        <input id="job-title" type="text" required></input>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" required></input>

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" required></input>
      </div>
    );
  }
}

export default General;
