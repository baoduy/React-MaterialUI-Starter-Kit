//Setup enzyme
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

//Setup Jest
import { createSerializer } from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" })); //deep,shallow
