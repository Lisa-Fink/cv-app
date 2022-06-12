import Ed from './form/Ed';
import General from './form/General';
import Work from './form/Work';
import '../styles/form.css';
import React from 'react';

function FormHooks(props) {
  return (
    <form onSubmit={props.submit}>
      <h1>CV Form</h1>
      <General inputs={props.inputs} inputChange={props.inputChange} />
      <Ed
        inputs={props.inputs}
        inputChange={props.inputChange}
        addSchool={props.addSchool}
        removeSchool={props.removeSchool}
      />
      <Work
        inputs={props.inputs}
        inputChange={props.inputChange}
        addJob={props.addJob}
        removeJob={props.removeJob}
      />
      <button id="submit-btn">Submit</button>

      <button onClick={props.createSample} id="sample-btn">
        Create Sample CV
      </button>
    </form>
  );
}

export default FormHooks;
