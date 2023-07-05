import axios from "axios";
let url =
  "https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics/market_data/price_usd";
export var MainApi = function () {
  this.getCryptoAPi = async function () {
    let response = null;
    let error = null;
    return axios.get(url);
  };
};


// let url2 = "https://data.messari.io/api/v1/assets/bitcoin/metrics/price/time-series?start=2020-01-01&end=2020-02-01&interval=1d";
// export var Getdata = function () {
//   this.getCryptoAPi = async function () {
//     let response = null;
//     let error = null;
//     return axios.get(url2);
//   };
// };