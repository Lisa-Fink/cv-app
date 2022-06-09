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
        <div>
          <label htmlFor="school">School Name </label>
          <input id="school" type="text" required></input>
        </div>
        <div>
          <label htmlFor="degree">Degree Earned </label>
          <input id="degree" type="text" required></input>
        </div>
        <div>
          <label htmlFor="major">Major </label>
          <input id="major" type="text" required></input>
        </div>
        <div>
          <label htmlFor="grad">Graduation Date </label>
          <input id="grad" type="text" required></input>
        </div>
      </div>
    );
  }
}

export default Ed;
