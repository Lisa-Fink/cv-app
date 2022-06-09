import React, { Component } from 'react';
import Ed from './form/Ed';
import General from './form/General';
import Work from './form/Work';
import '../styles/form.css';

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <h1>CV Form</h1>
        <General />
        <Ed />
        <Work />
        <button>Submit</button>
      </form>
    );
  }
}
