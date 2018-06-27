import charts from "../_dummy_data/charts";
import simulator from "../_dummy_data//simulator";

//Calling Api and return data
//This will use timeout to simulate server call.
export function getChartData() {
  return simulator(charts);
}