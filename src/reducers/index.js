import {
  combineReducers
} from "redux";

import dashBoardReducers from "../views/Dashboard/Reducer";

const rootReducer = combineReducers({
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
});

export default rootReducer;