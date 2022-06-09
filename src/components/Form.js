import React, { Component } from 'react';
import Ed from './Ed';
import General from './General';
import Work from './Work';

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <General />
        <Ed />
        <Work />
        <button>Submit</button>
      </form>
    );
  }
}
