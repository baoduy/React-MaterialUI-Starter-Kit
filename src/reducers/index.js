import dashBoardReducers from "../views/Dashboard/Reducer";
import messageReducers from "../views/MessageBox/Reducer";
import { NotificationReducer } from "../actions/notifications";

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: messageReducers,
  notifications: NotificationReducer
};

export default reducers;
