let initialState = {
  quote: {},
  isLoading: false,
  error: null,
  isLoggodIn: false,
};

const quotes = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_QUOTE_START":
      return Object.assign({}, state, { isLoading: true });
    case "LOAD_QUOTE_SUCCESS":
      return Object.assign({}, state, {
        quote: action.payload,
        isLoading: false,
      });
    case "LOAD_QUOTE_FAILURE":
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    case "LOGOUT":
      return Object.assign({}, (state = initialState));
    default:
      return state;
  }
};

export default quotes;
