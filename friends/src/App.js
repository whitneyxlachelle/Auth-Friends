import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/login" component={LoginForm} />
       <Route component={LoginForm} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
