import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { Admin_reducer } from "./AdminRedux/Admin_Reducer";
import LoginReducer from "./LoginRedux/Login.Reducer";
import searhReducer from "./SearchRedux/Search.Reducer";
import signupReducer from "./SignupRedux/Signup.Reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as CartReducer } from "./CartRedux/reducer";
import { TrackOrder_reducer } from "./TrackOrder/TrackOrder_Reducer";
import { AllUser_reducer } from "./AllUsers/AllUsers.reducer"

const rootReducer = combineReducers({
  signup: signupReducer,
  login: LoginReducer,
  AppReducer,
  Admin_reducer,
  search: searhReducer,
  CartReducer,
 
  TrackOrder_reducer,AllUser_reducer
});

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);

export { store };