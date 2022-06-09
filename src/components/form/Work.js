import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div>
        <legend>Work Experience</legend>
        <div>
          <label htmlFor="company">Company Name</label>
          <input id="company" type="text" required></input>
        </div>
        <div>
          <label htmlFor="title">Job Title</label>
          <input id="title" type="text" required></input>
        </div>
        <div>
          <label htmlFor="start-date">Date started</label>
          <input id="start-date" type="date" required></input>
        </div>
        <div>
          <label htmlFor="end-date">Date Ended</label>
          <input id="end-date" type="date"></input>
        </div>
      </div>
    );
  }
}

export default Work;
