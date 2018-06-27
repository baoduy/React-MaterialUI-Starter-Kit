import { makeAsyncReducer } from "redux-toolbelt";
import actions from "./Actions";

const chartsReducer = makeAsyncReducer(actions.getChartData);
const generalReducer = makeAsyncReducer(actions.getGeneral);

export default {
    chartsReducer,
    generalReducer
};