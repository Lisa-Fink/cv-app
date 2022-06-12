import React, { useState } from 'react';
import Cv from './components/Cv';
import Form from './components/Form';
import './styles/app.css';

function AppHooks() {
  const initialInputs = {
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    education: [{ school: '', degree: '', major: '', grad: '' }],
    work: [{ company: '', title: '', startDate: '', endDate: '' }],
  };
  const [inputs, setInputs] = useState(initialInputs);

  const inputChange = (e) => {
    const id = e.target.id;

    if ((id.slice(0, 4) === 'educ') | (id.slice(0, 4) === 'work')) {
      let [mainProp, propName, index] = id.split('-');
      let newMain = [...inputs[mainProp]];
      newMain[index][propName] = e.target.value;
      setInputs({ ...inputs, [mainProp]: newMain });
    } else {
      setInputs({ ...inputs, [id]: e.target.value });
    }
  };

  const addSchool = () => {
    setInputs({
      ...inputs,
      education: [
        ...inputs.education,
        { school: '', degree: '', major: '', grad: '' },
      ],
    });
  };
  const removeSchool = () => {
    setInputs({ ...inputs, education: [...inputs.education].slice(0, -1) });
  };

  const addJob = () => {
    setInputs({
      ...inputs,
      work: [
        ...inputs.work,
        { company: '', title: '', startDate: '', endDate: '' },
      ],
    });
  };

  const removeJob = () => {
    setInputs({ ...inputs, work: [...inputs.work].slice(0, -1) });
  };

  const createSample = (e) => {
    const newInputs = {
      name: 'Lisa Frank',
      jobTitle: 'Full Stack Web Developer',
      email: 'lisafrankdev@lisafrankdevFake.fake',
      phone: 5555555555,
      education: [
        {
          school: 'Oregon State University',
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          grad: 'June 2024',
        },
        {
          school: 'Oregon State University',
          degree: 'Master of Science',
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
    setInputs(newInputs);
    toggleForm(e);
  };

  const [formStatus, setFormStatus] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setFormStatus(!formStatus);
  };

  const content = formStatus ? (
    <Cv inputs={inputs} editForm={toggleForm} />
  ) : (
    <Form
      submit={toggleForm}
      inputs={inputs}
      inputChange={inputChange}
      addSchool={addSchool}
      removeSchool={removeSchool}
      addJob={addJob}
      removeJob={removeJob}
      createSample={createSample}
    />
  );
  return <div className="container">{content}</div>;
}

export default AppHooks;
