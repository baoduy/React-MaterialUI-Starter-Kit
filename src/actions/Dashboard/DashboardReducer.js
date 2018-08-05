import { makeAsyncReducer } from 'redux-toolbelt';
import * as actions from './DashboardActions';

const chartsReducer = makeAsyncReducer(actions.getChartData);
const generalReducer = makeAsyncReducer(actions.getGeneral);

export default {
  chartsReducer,
  generalReducer
};
