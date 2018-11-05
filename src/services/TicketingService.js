// export async function parseGetPriceChangeSummaryResponse(response) {
//   if (response.status === 404) {
//     throw new Error("GetPRiceChangeSummaryResponse failed");
//   }
//   const getPXSummaryJson = await response.json();
//   const {
//     PriceChangeEvents: {
//       PriceChangeSummary: [
//         { TotalOnHand, TotalScanned, PriceChangeEffectiveDate, Store }
//       ],
//       store: { StoreName, StoreNumber }
//     }
//   } = getPXSummaryJson.data;
//   return {
//     response: getPXSummaryJson.data
//   };
// }

export function getPriceChangeSummary(storeNumber = "9944e") {
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
