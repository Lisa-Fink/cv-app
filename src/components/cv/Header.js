import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const inputs = this.props.inputs;
    return (
      <div id="header">
        <h1>{inputs.name}</h1>
        <div id="header-2">
          <h2>{inputs.jobTitle}</h2>
          <h3>{inputs.email}</h3>
          <h3>{inputs.phone}</h3>
        </div>
      </div>
    );
  }
}
