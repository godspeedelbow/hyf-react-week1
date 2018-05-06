import React from 'react';
import './Content.css';

function MyName() {
  return 'Eelke';
}

function Content() {
  return (
    <p className="my-content">
      <MyName />
    </p>
  );
}

export default Content;
