import dashBoardReducers from "../views/Dashboard/Reducer";
import * as messageReducers from "../views/MessageBox/Reducer";

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: messageReducers.MessageBoxReducer,
  notifications: messageReducers.NotificationReducer
};

export default reducers;