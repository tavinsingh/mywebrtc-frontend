import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import StreamerPage from './pages/StreamerPage'
import ViewerPage from './pages/ViewerPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={StreamerPage} exact />
          <Route path="/viewer" component={ViewerPage} />
        </div>
      </Router>

    );
  }
}

export default App;
