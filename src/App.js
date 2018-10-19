import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "typeface-roboto";
import NavBar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import MainDash from "./components/MainDash";

class App extends Component {
  state = {
    event: ""
  };

  componentDidMount() {
    document.addEventListener("message", this.handlePostMessage);
  }

  componentWillUnmount() {
    document.removeEventListener("message", this.handlePostMessage);
  }

  handlePostMessage = event => {
    const { data } = event;
    const incomingEvent = JSON.parse(data);

    if (incomingEvent.type === "SCAN") {
      this.setState({
        event: incomingEvent.payload
      });
    }
  };

  render() {
    return (
      <div className="App">
        <body className="App-Body">
          <NavBar />
          <HeaderBar
            storeNumber={101}
            storeName="Menomonee Falls"
            effectiveDate={new Date("4/27/2018")}
          />
          <MainDash onHandCount={4800} scannedCount={227} />

          <button onClick="NavigateTicketing()" />

          <img src={logo} className="App-logo" alt="logo" />
          <p>GH-Pages</p>
          <span>Most recent event {this.state.event}</span>
        </body>
      </div>
    );
  }
}

export default App;
