import React from 'react';
import './about.css';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <ul>
        <li>Javascript-</li>
        <li>HTML/JSX</li>
        <li>React</li>
        <li>Postgresql</li>
        <li>Material-UI</li>
        <li>React-redux</li>
        <li>Redux-Sagas</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Moment.js</li>
        <li>Passport.js</li>
      </ul>
      <p>
        
      </p>
    </div>
  </div>
);

export default AboutPage;
