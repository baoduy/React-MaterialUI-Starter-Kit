import charts from '../_dummy_data/charts';
import se from "../_dummy_data//simulator";

//Calling Api and return data
//This will use timeout to simulate server call.
export function getChartData() {
  return se(charts);
}