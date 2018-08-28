import {
  Reducer as dashBoardReducers
} from '../actions/Dashboard';
import {
  Reducer as MessageBoxReducer
} from '../actions/MessageBox';
import {
  Reducer as NotificationReducer
} from '../actions/Notifications';
import {
  Reducer as UserReducer
} from '../actions/Users';

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: MessageBoxReducer,
  notifications: NotificationReducer,
  users: UserReducer
};

export default reducers;