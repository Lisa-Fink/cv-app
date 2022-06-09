import React, { Component } from 'react';

class Ed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <legend>Education</legend>

        <label htmlFor="school">School Name:</label>
        <input id="school" type="text" required></input>
        <label htmlFor="degree">Degree Earned</label>
        <input id="degree" type="text" required></input>
        <label htmlFor="grad">Graduation Date</label>
        <input id="grad" type="text" required></input>
      </div>
    );
  }
}

export default Ed;
