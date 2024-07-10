// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// App.js
import React from 'react';
import { Header, Gallery } from './components/Gallery';

const teamMembers = [
  { id: 1, name: 'Alice Smith', role: 'Developer', photo: 'alice.jpg' },
  { id: 2, name: 'Bob Johnson', role: 'Designer', photo: 'bob.jpg' },
  { id: 3, name: 'Charlie Brown', role: 'Manager', photo: 'charlie.jpg' },
];

function App() {
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
