import { makeThunkAsyncActionCreator } from "redux-toolbelt-thunk";
import Api from "../../api";

const getGeneral = makeThunkAsyncActionCreator(
  "FETCH_USER",
  Api.GeneralApi.getGeneral
);

const getChartData = makeThunkAsyncActionCreator(
  "FETCH_USER",
  Api.ChartApi.getChartData
);

export default {
  getGeneral,
  getChartData
};
