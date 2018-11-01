import React, { Component } from "react";

import HeaderBar from "./HeaderBar";
import MainDash from "./MainDash";
import { NavLink } from "react-router-dom";
import { getPriceChangeSummary } from "../services/TicketingService";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ""
    };
  }

  // handlePostMessage = response => {
  //   const { data } = response;
  //   const incomingResponse = JSON.parse(data);

  //   if (incomingResponse.Header.ResponseCode === "1") {
  //     this.setState({
  //       response: incomingResponse.Data
  //     });
  //   }
  // };

  componentDidMount() {
    const content = getPriceChangeSummary();
    console.log(content);
  }

  render() {
    return (
      <div>
        <HeaderBar
          storeNumber={101}
          storeName="Menomonee Falls"
          effectiveDate={new Date("4/27/2018")}
        />
        <MainDash onHandCount={4800} scannedCount={227} />
        <NavLink to="/floorpadlistpage">Navigated Ticketing</NavLink>
      </div>
    );
  }
}
export default MainPage;
