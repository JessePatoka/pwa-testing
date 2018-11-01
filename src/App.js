import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "typeface-roboto";
import MainPage from "./components/MainPage";
import FloorpadListPage from "./components/FloorpadListPage";
import EsignListPage from "./components/EsignListPage";
import ProductListPage from "./components/ProductListPage";
import NavBar from "./components/NavBar";
import { Route, HashRouter } from "react-router-dom";

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
        <NavBar />
        <HashRouter>
          <div className="App-Body">
            <Route exact path="/" component={MainPage} />
            <Route path="/floorpadlistpage" component={FloorpadListPage} />
            <Route path="/esignlistpage" component={EsignListPage} />
            <Route path="/productlistpage" component={ProductListPage} />
            <img src={logo} className="App-logo" alt="logo" />
            <p>GH-Pages</p>
            <span>Most recent event {this.state.event}</span>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
