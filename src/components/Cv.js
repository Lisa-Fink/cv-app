import Content from './cv/Content';
import Header from './cv/Header';
import '../styles/content.css';
import React from 'react';

function Cv(props) {
  return (
    <div>
      <Header inputs={props.inputs} />
      <Content inputs={props.inputs} />
      <div id="footer">
        <button onClick={props.editForm}>Edit</button>
      </div>
    </div>
  );
}

export default Cv;
