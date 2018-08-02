import { Reducer as dashBoardReducers } from '../actions/Dashboard';
import { Reducer as MessageBoxReducer } from '../actions/MessageBox';
import { Reducer as NotificationReducer } from '../actions/Notifications';

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: MessageBoxReducer,
  notifications: NotificationReducer
};

export default reducers;
