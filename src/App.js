import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    event: ''
  };

  componentDidMount() {
    document.addEventListener('message', this.handlePostMessage);
  }

  componentWillUnmount() {
    document.removeEventListener('message', this.handlePostMessage);
  }

  handlePostMessage = event => {
    const { data } = event;
    const incomingEvent = JSON.parse(data);

    if (incomingEvent.type === 'SCAN') {
      this.setState({
        event: incomingEvent.payload
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bharath is a cool guy.</p>
          <span>Most recent event {this.state.event}</span>
        </header>
      </div>
    );
  }
}

export default App;
