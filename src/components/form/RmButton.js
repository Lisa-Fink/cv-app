import React, { Component } from 'react';

export default class RmButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const button = (
      <button onClick={this.props.func}>Remove {this.props.category}</button>
    );

    const showButton =
      this.props.inputs[this.props.propName].length > 1 ? button : null;

    return showButton;
  }
}
