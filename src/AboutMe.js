import React from 'react';
import './AboutMe.css';

// import getHNStories from './get-hn-stories';

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About me</h2>
      <ul>
        <li>Born in 1983 in Utrecht, The Netherlands</li>
        <li>Married to Maria in 2016, moved to Sweden in 2017</li>
        <li>Love to program Javascript and React</li>
        <li>Hate to vacuum clean</li>
      </ul>
    </div>
  );
}

export default AboutMe;
