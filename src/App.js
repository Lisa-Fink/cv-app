import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      inputs: {},
      formComplete: false,
    };
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    let [
      name,
      email,
      phone,
      school,
      degree,
      grad,
      company,
      title,
      startDate,
      endDate,
    ] = [...e.target].slice(0, -1).map((input) => input.value);

    let newData = {
      name,
      email,
      phone,
      school,
      degree,
      grad,
      company,
      title,
      startDate,
      endDate,
    };

    this.setState({
      inputs: newData,
      formComplete: true,
    });
  }
  render() {
    const content = this.state.formComplete ? (
      'form complete'
    ) : (
      <Form submit={this.submitForm} />
    );
    return <div>{content}</div>;
  }
}

export default App;
