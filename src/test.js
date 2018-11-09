import React from "react";
//import axios from "axios";

import sinon from "sinon";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./";
import HeaderBar from "./components/HeaderBar";

configure({ adapter: new Adapter() });

describe("App", () => {
  const result = {
    data: {
      PriceChangeEvents: {
        PriceChangeSummary: [
          {
            TotalOnHand: 0,
            TotalScanned: 0,
            PriceChangeEffectiveDate: "2018-11-04T03:00:00",
            Store: null
          }
        ],
        store: {
          StoreName: "KOHLS CORPORATE SUP ",
          StoreNumber: 9944
        }
      }
    }
  };

  const promise = Promise.resolve(result);

  beforeAll(() => {
    sinon
      .stub(fetch, "post")
      .withArgs("http://localhost:55430/api/Ticketing/V2/GetPriceChangeSummary")
      .returns(promise);
  });

  afterAll(() => {
    fetch.get.restore();
  });

  it("renders data when it fetched data successfully", done => {
    const wrapper = mount(<App />);

    expect(wrapper.find("p").text()).toEqual("Loading ...");

    promise.then(() => {
      wrapper.update();

      expect(wrapper.find(HeaderBar)).toHaveLength(1);

      done();
    });
  });

  it("stores data in local state", done => {
    const wrapper = mount(<App />);

    expect(wrapper.state().PriceChangeEvents).toEqual([]);

    promise.then(() => {
      wrapper.update();

      expect(wrapper.state().PriceChangeEvents).toEqual(
        result.data.PriceChangeEvents
      );

      done();
    });
  });
});
