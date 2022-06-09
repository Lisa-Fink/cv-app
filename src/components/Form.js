import React, { Component } from 'react';
import Ed from './form/Ed';
import General from './form/General';
import Work from './form/Work';
import '../styles/form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <h1>CV Form</h1>
        <General
          inputs={this.props.inputs}
          inputChange={this.props.inputChange}
        />
        <Ed inputs={this.props.inputs} inputChange={this.props.inputChange} />
        <Work inputs={this.props.inputs} inputChange={this.props.inputChange} />
        <button>Submit</button>
      </form>
    );
  }
}
