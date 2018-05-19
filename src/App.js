import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AboutMe from './AboutMe';
import ArticleList from './ArticleList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ArticleList />
    </div>
  );
}

export default App;
