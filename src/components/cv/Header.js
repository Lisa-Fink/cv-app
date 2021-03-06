import React from 'react';

function Header(props) {
  const inputs = props.inputs;
  const phone = inputs.phone.toString();
  const formatPhone = `(${phone.slice(0, 3)})${phone.slice(3, 6)}-${phone.slice(
    6
  )}`;
  return (
    <div id="header">
      <h1>{inputs.name}</h1>
      <div id="header-2">
        <h2>{inputs.jobTitle}</h2>
        <h3>{inputs.email}</h3>
        <h3>{formatPhone}</h3>
      </div>
    </div>
  );
}

export default Header;
