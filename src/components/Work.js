import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div>
        <legend>Work Experience</legend>
        <label htmlFor="company">Company Name</label>
        <input id="company" type="text" required></input>

        <label htmlFor="title">Job Title</label>
        <input id="title" type="text" required></input>

        <label htmlFor="start-date">Date started</label>
        <input id="start-date" type="date" required></input>

        <label htmlFor="end-date">Date Ended</label>
        <input id="end-date" type="date"></input>
      </div>
    );
  }
}

export default Work;
