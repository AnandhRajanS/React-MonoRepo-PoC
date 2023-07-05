import axios from "axios";

export const loadQuote = () => {
  return (dispatch, getState) => {
    dispatch({ type: "LOAD_QUOTE_START" });
    console.log("axioslist", "axioslist");
    axios
      .get(
        "https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
      )
      .then(function (response) {
        dispatch({ type: "LOAD_QUOTE_SUCCESS", payload: response.data });
        dispatch({ type: "LOAD_QUOTE_FAILURE", payload: null });
      })
      .catch(function (error) {
        dispatch({ type: "LOAD_QUOTE_FAILURE", payload: error });
      });
  };
};

export const Logout = () => {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT", payload: true });
  };
};
