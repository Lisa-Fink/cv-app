import React, { Component } from 'react';
import Content from './cv/Content';
import Header from './cv/Header';

export default class Cv extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Header inputs={this.props.inputs} />
        <Content inputs={this.props.inputs} />
      </div>
    );
  }
}
