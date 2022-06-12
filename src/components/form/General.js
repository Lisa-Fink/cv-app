import React from 'react';

function General(props) {
  const inputs = props.inputs;
  return (
    <div id="general">
      <legend>General Information</legend>
      <div>
        <label htmlFor="name">Full Name </label>
        <input
          value={inputs.name}
          onChange={props.inputChange}
          id="name"
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title </label>
        <input
          value={inputs.jobTitle}
          onChange={props.inputChange}
          id="jobTitle"
          type="text"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          value={inputs.email}
          onChange={props.inputChange}
          id="email"
          type="email"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Phone </label>
        <input
          value={inputs.phone}
          onChange={props.inputChange}
          id="phone"
          type="tel"
          minLength="9"
          maxLength="9"
          required
        ></input>
      </div>
    </div>
  );
}

export default General;
