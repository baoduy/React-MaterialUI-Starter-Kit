import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import Api from '../../api';

export const getGeneral = makeThunkAsyncActionCreator(
  'FETCH_USER',
  Api.GeneralApi.getGeneral
);

export const getChartData = makeThunkAsyncActionCreator(
  'FETCH_USER',
  Api.ChartApi.getChartData
);
