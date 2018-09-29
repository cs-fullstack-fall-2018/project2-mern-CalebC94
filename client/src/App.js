import React, { Component } from 'react';
import './App.css';
import JournalEntry from './JournalEntry';

class App extends Component {


  render() {
      fetch('/api/getall')
          .then(data => data.json())
          .then(response => this.setState({data: response}));

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <JournalEntry/>
      </div>
    );
  }
}

export default App;
