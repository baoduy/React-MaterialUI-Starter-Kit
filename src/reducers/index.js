import { combineReducers } from "redux";

import dashBoardReducers from "../views/Dashboard/Reducer";
import * as messageReducers from "../views/MessageBox/Reducer";

const rootReducer = combineReducers({
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: messageReducers.MessageBoxReducer,
  notifications: messageReducers.NotificationReducer
});

export default rootReducer;
