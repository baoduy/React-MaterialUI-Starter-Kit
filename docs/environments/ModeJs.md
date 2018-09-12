# Node Js Hosting

There is a sub module contains the Express.js configuration to host the application in the Node Js environment.
The application will running port 3000 and 3001 in NodeJs and the port is configurable in the Js file.

If you are not using Node Js hosting just simply remove the submodule **sm-react-node-express** There is no impact to the application.
But, please note that the `npm run start-prod` is using this submodule to hosting the dist folder as a static side. Please be considered before removing this module.
