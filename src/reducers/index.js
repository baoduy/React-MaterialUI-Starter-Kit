import dashBoardReducers from '../views/Dashboard/Reducer';
import { Reducer as MessageBoxReducer } from '../actions/messageBox';
import { Reducer as NotificationReducer } from '../actions/notifications';

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: MessageBoxReducer,
  notifications: NotificationReducer
};

export default reducers;
