import React, { Component } from 'react';
import Cv from './components/Cv';
import Form from './components/Form';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.inputChange = this.inputChange.bind(this);
    // inputs for testing
    // inputs: {
    //   name: 'Lisa Frank',
    //   jobTitle: 'Full Stack Web Developer',
    //   email: 'lisa@email.email',
    //   phone: 5555555555,
    //   school: 'Fake School University',
    //   degree: "Bachelor's of Fake",
    //   major: 'Computer Science',
    //   grad: 'Fake 999',
    //   company: 'Fake Company',
    //   title: 'CEO',
    //   startDate: '1/1/1',
    //   endDate: '9/9/9',
    // },

    this.state = {
      inputs: {
        name: '',
        jobTitle: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        major: '',
        grad: '',
        company: '',
        title: '',
        startDate: '',
        endDate: '',
      },
      formComplete: false,
    };
  }
  inputChange(e) {
    let newInputs = this.state.inputs;
    newInputs[e.target.id] = e.target.value;
    this.setState({
      inputs: newInputs,
    });
  }
  editForm() {
    this.setState({
      formComplete: false,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const inputs = this.state.inputs;

    this.setState({
      inputs: inputs,
      formComplete: true,
    });
  }
  render() {
    const content = this.state.formComplete ? (
      <Cv inputs={this.state.inputs} editForm={this.editForm} />
    ) : (
      <Form
        submit={this.submitForm}
        inputs={this.state.inputs}
        inputChange={this.inputChange}
      />
    );
    return <div className="container">{content}</div>;
  }
}

export default App;
