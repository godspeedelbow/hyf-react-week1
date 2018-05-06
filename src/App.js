import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './Content';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Malmö</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header>
        My Awesome Company
      </Header>
      <Content />
    </div>
  );
}

export default App;
