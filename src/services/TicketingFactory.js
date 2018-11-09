import React from "react";
import {
  TicketingService,
  TicketingMockService
} from "../services/TicketingService";

export class TicketingFactory extends React.Component {
  getService() {
    //mock or ticketing service logic
    //get variable or config to check if mock
    if (true) {
      return new TicketingMockService();
    }

    return new TicketingService();
  }
}
//export default TicketingFactory;
