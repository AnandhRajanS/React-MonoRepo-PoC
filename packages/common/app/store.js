import { createStore, applyMiddleware } from "redux";
import quoteReducer from "./reducers/quotesReducer";
import thunk from "redux-thunk";
import { user } from "../redux/user-reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: user.reducer,
  quote: quoteReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
