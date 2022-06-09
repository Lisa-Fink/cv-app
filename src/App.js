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
    this.removeSchool = this.removeSchool.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.createSample = this.createSample.bind(this);

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
  createSample(e) {
    const newInputs = {
      name: 'Lisa Frank',
      jobTitle: 'Full Stack Web Developer',
      email: 'lisafrankdev@lisafrankdevFake.fake',
      phone: 5555555555,
      education: [
        {
          school: 'Oregon State University',
          degree: "Bachelor's of Science",
          major: 'Computer Science',
          grad: 'June 2024',
        },
        {
          school: 'Oregon State University',
          degree: "Master's of Science",
          major: 'Computer Science',
          grad: 'June 2028',
        },
      ],
      work: [
        {
          company: 'Google',
          title: 'Summer Internship',
          startDate: '2023-06-06',
          endDate: '2023-08-21',
        },
        {
          company: 'Amazon',
          title: 'Junior Web Dev',
          startDate: '2024-07-12',
          endDate: '',
        },
      ],
    };
    this.setState(
      {
        inputs: newInputs,
      },
      () => {
        this.submitForm(e);
      }
    );
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
  removeSchool() {
    const newEds = this.state.inputs.education.slice(0, -1);
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

  removeJob() {
    const newWork = this.state.inputs.work.slice(0, -1);
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
        removeSchool={this.removeSchool}
        addJob={this.addJob}
        removeJob={this.removeJob}
        createSample={this.createSample}
      />
    );
    return <div className="container">{content}</div>;
  }
}

export default App;
