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
import {
  reducer as formReducer
} from 'redux-form';

const reducers = {
  charts: dashBoardReducers.chartsReducer,
  general: dashBoardReducers.generalReducer,
  messageBox: MessageBoxReducer,
  notifications: NotificationReducer,
  users: UserReducer,
  form: formReducer
};

export default reducers;