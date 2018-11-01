var schema = {
  Data: {
    PriceChangeEvents: {
      PriceChangeSummary: [
        {
          TotalOnHand: 1125,
          TotalScanned: 376,
          PriceChangeEffectiveDate: "2018-10-18T03:00:00",
          Store: null
        }
      ],
      store: {
        StoreName: "BROOKFIELD-WI       ",
        StoreNumber: 39
      }
    }
  },
  Header: {
    ResponseCode: 1,
    ResponseDescription: null,
    ResponseMessageCode: null,
    TotalMilliseconds: 0
  }
};

module.exports = schema;
