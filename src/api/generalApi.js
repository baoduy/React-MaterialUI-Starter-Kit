import general from "../../tests/_dummy_data/general";
import simulator from "../../tests/_dummy_data/simulator";

//Calling Api and return data
//This will use timeout to simulate server call.
export function getGeneral() {
  return simulator(general);
}
