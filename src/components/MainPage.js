import React, { Component } from "react";

import HeaderBar from "./HeaderBar";
import MainDash from "./MainDash";
import { NavLink } from "react-router-dom";
import { getPriceChangeSummary } from "../services/TicketingService";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceChangeEvents: {
        PriceChangeSummary: [
          {
            TotalOnHand: 0,
            TotalScanned: 0,
            PriceChangeEffectiveDate: null,
            Store: ""
          }
        ],
        store: { StoreName: "", StoreNumber: "" }
      },
      storeNumber: "",
      storeName: "",
      ticketingEventDate: "",
      isLoading: false
    };
  }

  handlePostMessage = response => {
    if (response.Header.ResponseCode === 1) {
      console.log(response.Data);
      this.setState({
        priceChangeEvents: response.Data.PriceChangeEvents,
        isLoading: false
      });
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    getPriceChangeSummary().then(response => this.handlePostMessage(response));
  }

  render() {
    const { priceChangeEvents, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <HeaderBar
          storeNumber={priceChangeEvents.store.StoreNumber}
          storeName={priceChangeEvents.store.StoreName}
          effectiveDate={
            new Date(
              priceChangeEvents.PriceChangeSummary[0].PriceChangeEffectiveDate
            )
          }
        />
        <MainDash onHandCount={4800} scannedCount={227} />
        <NavLink to="/floorpadlistpage">Navigated Ticketing</NavLink>
      </div>
    );
  }
}
export default MainPage;
