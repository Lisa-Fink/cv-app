import React, { Component } from 'react';
import Cv from './components/Cv';
import Form from './components/Form';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      inputs: {
        // name: 'Lisa Frank',
        // jobTitle: 'Full Stack Web Developer',
        // email: 'lisa@email.email',
        // phone: 5555555555,
        // school: 'Fake School University',
        // degree: "Bachelor's of Fake",
        // major: 'Computer Science',
        // grad: 'Fake 999',
        // company: 'Fake Company',
        // title: 'CEO',
        // startDate: '1/1/1',
        // endDate: '9/9/9',
      },
      formComplete: false,
    };
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    let [
      name,
      jobTitle,
      email,
      phone,
      school,
      degree,
      major,
      grad,
      company,
      title,
      startDate,
      endDate,
    ] = [...e.target].slice(0, -1).map((input) => input.value);

    let newData = {
      name,
      jobTitle,
      email,
      phone,
      school,
      degree,
      major,
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
      <Cv inputs={this.state.inputs} />
    ) : (
      <Form submit={this.submitForm} />
    );
    return <div className="container">{content}</div>;
  }
}

export default App;
