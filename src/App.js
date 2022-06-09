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
    this.addSchool = this.addSchool.bind(this);
    this.addJob = this.addJob.bind(this);
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
        education: [{ school: '', degree: '', major: '', grad: '' }],
        work: [{ company: '', title: '', startDate: '', endDate: '' }],
      },
      formComplete: false,
    };
  }
  addSchool() {
    const newEds = [
      ...this.state.inputs.education,
      { school: '', degree: '', major: '', grad: '' },
    ];
    const newInputs = this.state.inputs;
    newInputs.education = newEds;

    this.setState({
      inputs: newInputs,
    });
  }

  addJob() {
    const newWork = [
      ...this.state.inputs.work,
      { company: '', title: '', startDate: '', endDate: '' },
    ];
    const newInputs = this.state.inputs;
    newInputs.work = newWork;

    this.setState({
      inputs: newInputs,
    });
  }

  inputChange(e) {
    let newInputs = this.state.inputs;
    const id = e.target.id;

    if ((id.slice(0, 4) === 'educ') | (id.slice(0, 4) === 'work')) {
      let [mainProp, propName, index] = id.split('-');
      newInputs[mainProp][index][propName] = e.target.value;
    } else {
      newInputs[id] = e.target.value;
    }

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

    this.setState({
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
        addSchool={this.addSchool}
        addJob={this.addJob}
      />
    );
    return <div className="container">{content}</div>;
  }
}

export default App;
