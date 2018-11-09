export class TicketingService {
  getPriceChangeSummary(storeNumber = "9944e") {
    const KTSA_URL = `http://localhost:55430/api/Ticketing/V2/GetPriceChangeSummary`;
    return (
      fetch(KTSA_URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json; charset=utf-8"
          //"Access-Control-Allow-Origin": "*"
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({
          StoreNumber: "9944",
          AssociateId: "tkmadoy",
          PrchgType: "PCY",
          Header: {
            ApiVersion: "18.1.0.0",
            JsonWebToken: null
          }
        })
      })
        .then(response => response.json())
        // .then(response => console.log("success:", JSON.stringify(response)))
        .catch(console.error)
    );
  }
}

export class TicketingMockService {
  //needs to return a promise
  getPriceChangeSummary() {
    return new Promise((resolve, reject) => {
      resolve(this.getPriceChangeSummaryInternal());
    });
  }

  getPriceChangeSummaryInternal() {
    var result = {
      Data: {
        PriceChangeEvents: {
          PriceChangeSummary: [
            {
              TotalOnHand: 0,
              TotalScanned: 0,
              PriceChangeEffectiveDate: "",
              Store: null
            }
          ],
          store: {
            StoreName: "",
            StoreNumber: 0
          }
        }
      },
      Header: {
        ResponseCode: 0,
        ResponseDescription: null,
        ResponseMessageCode: null,
        TotalMilliseconds: 0
      }
    };

    result.Data.title = "TICKETING";
    result.Data.PriceChangeEvents.store = {
      StoreName: "KOHLS CORPORATE asdf",
      StoreNumber: 9915
    };
    result.Data.PriceChangeSummary = [
      {
        TotalOnHand: 1125,
        TotalScanned: 376,
        PriceChangeEffectiveDate: "2018-10-18T03:00:00",
        Store: null
      },
      {
        TotalOnHand: 4067,
        TotalScanned: 1234,
        PriceChangeEffectiveDate: "2018-10-19T03:00:00",
        Store: null
      },
      {
        TotalOnHand: 244,
        TotalScanned: 50,
        PriceChangeEffectiveDate: "2018-10-20T03:00:00",
        Store: null
      }
    ];
    result.Header = {
      ResponseCode: 1,
      ResponseDescription: null,
      ResponseMessageCode: null,
      TotalMilliseconds: 0
    };

    return result;
  }
}
