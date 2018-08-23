# React Webpack Babel Starter

[![CircleCI](https://circleci.com/gh/baoduy/React-MaterialUI-Started-Kit.svg?style=svg)](https://circleci.com/gh/baoduy/React-MaterialUI-Started-Kit)
[![codecov](https://codecov.io/gh/baoduy/React-MaterialUI-Started-Kit/branch/develop/graph/badge.svg)](https://codecov.io/gh/baoduy/React-MaterialUI-Started-Kit) [![Greenkeeper badge](https://badges.greenkeeper.io/baoduy/React-MaterialUI-Started-Kit.svg)](https://greenkeeper.io/)
[![Open Source Helpers](https://www.codetriage.com/baoduy/react-materialui-started-kit/badges/users.svg)](https://www.codetriage.com/baoduy/react-materialui-started-kit)
[![PeerDependencies](https://img.shields.io/david/peer/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit?type=peer)
[![Dependencies](https://img.shields.io/david/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit)
[![DevDependencies](https://img.shields.io/david/dev/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit?type=develop)

The PRD really sttarted kit for **ReactJs** with hot module replacement (HMR) for rapid development.

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
- **[Babel](http://babeljs.io/)** (7.x)
- **[JSS](http://cssinjs.org/?v=v9.8.7)** this is Css in Jss, the powerfull tool to develop Css using Js. The tool is using natively by Material UI.
- **[LESS](http://lesscss.org/)** for style-sheet development. if you don't want to use Jss.
- **[Jest](https://facebook.github.io/jest/)** - Testing framework for React applications
- **[Image Loader](https://github.com/vanwagonet/img-loader)** to loading and minify the images.
- **[Redux](https://redux.js.org/)** Manage the Component states.
- **[Redux-Thunk](https://github.com/reduxjs/redux-thunk)** The middle-ware of Redux
- **[Redux-toolbelt](https://github.com/welldone-software/redux-toolbelt)** A set of tools for quicker, easier, less verbose and safer Redux development by [welldone-software](http://welldone-software.com/).
- **[request-promise](https://github.com/request/request-promise)** and **[request](https://github.com/request/request)** for WebApi communication.

- **ESLINT** for Javascript and ReactJs coding best practises.
- Code quality (linting) for JavaScript and LESS/CSS.

- This project also using **babel-runtime** and **babel-plugin-transform-runtime** to speperate the commonns functions to the other modules to reduce the size of the js files. Refer [here](babel-plugin-transform-runtime) for details.

* The tool to convert Css to Jss [here](https://github.com/cssinjs/cli) and to LESS [here](http://kronus.me/cn/css2less/) in case you don't like Jss.

## Original Source Code

Based on the best practises of the Single-Page-Application development with NodeJS. I added the nice font-end component [Material-Dashboard-React](https://github.com/creativetimofficial/material-dashboard-react) and Redux store integration.

Beside of that I also developped some useful compoment as Message box, Notification to make the Started-kit to be a **Production ready** SPA kit.

## Support Features

### 1. async/await

It is using `babel-regenerator-runtime` to transform the async and await functions to Promise.

```javascript
//Transform from
function getDataFromServer() {
  return Promise((resolve, reject) => {
    loadDataFromServer()
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

//To
async function getDataFromServer() {
  try {
    return await loadDataFromServer();
  } catch (error) {
    throw error;
  }
}
```

### Installation

1.  Clone/download repo
2.  `npm install`
3.  Replace the CodeCov.io token to your one in the `package.json` file.
4.  Run `npm start` to run the project.

---

## Usage

### Development

`npm run start-dev`

- Build app continously (HMR enabled)
- App served @ `http://localhost:8080`

### Production

`npm run start-prod`

- Build app once (HMR disabled)
- App served @ `http://localhost:3000`

### Webpack Bundle Analysis

`npm run start-analysis`

- Analysis served @ `http://localhost:8888`

---

## New Compoments

1.  **Message Box and Notification**: Allow to show Info, Confirm, Success and Error message and notification. Refer to the MessageBox in Views folder so sample that using Redux store to manage the state.

---

### Docker Support

1.  Build Image `docker build`.
2.  Build and Tag the image `docker image build . -f sm-react-docker-nginx/Dockerfile -t [YOUR_ID]/react-materialui-started-kit:latest`.
    Example `docker image build . -f sm-react-docker-nginx/Dockerfile -t baoduy2412/react-materialui-started-kit:latest`.
3.  Push inage to Docker hub `docker push [YOUR_ID]/react-materialui-started-kit:latest`
    Example `docker push baoduy2412/react-materialui-started-kit:latest`.

The application will running port 80 and 443 in Docker.
The image can be found in Docker hub [here](https://hub.docker.com/r/baoduy2412/react-materialui-started-kit/).

However if you are not using Docker just simply remove the submodule **sm-react-docker-nginx** There is no impact to the application.

---

### IIS Support

The `Web.config` file in **sm-react-iis** had been added for IIS hosting purpose. This file should be copy along with all files in dist folder when hosting in IIS.

However if you are not hosting this app in IIS just simply remove the submodule **sm-react-iis** There is no impact to the application.

---

### Azure Service Fabric Support

All stuffs in `sm-react-service-fabric` folder are using for **[Azure Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)** hosting purpose.

The C# project inside this folder will copy all files from dist folder to wwwroot folder and host them as a static side in Azure Service Fabric.

Currently, I'm using .Net Core 2.1 to make the project is flexible enough to host on any platforms.

When build the Service Fabric application it will copy all files in `dist` folder to `wwwroot` folder. So ensure you run the `npm build` before deploy the Service Fabric app.

However if you are not using Service Fabric just simply remove the submodule **sm-react-service-fabric** There is no impact to the application.

---

### Node Js Hosting

There is a sub module contains the Express.js configuration to host the application in the Node Js environment.
The application will running port 3000 and 3001 in NodeJs and the port is configurable in the Js file.

If you are not using Node Js hosting just simply remove the submodule **sm-react-node-express** There is no impact to the application.
But, please note that the `npm run start-prod` is using this submodule to hosting the dist folder as a static side. Please be considered before removing this module.

---

### GZIP and SSL

The **GZIP** and **SSL** had been applied for all hosting environments above.

---

### All commands

| Command                  | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `npm run start`          | Build app continuously (HMR enabled) and serve @ `http://localhost:8080` |
| `npm run start-prod`     | Build app once (HMR disabled) and serve @ `http://localhost:3000`        |
| `npm run start-analysis` | Build and start Webpack Bundle Analyser @ `http://localhost:8888`        |
| `npm run build`          | Build app to `/dist/`                                                    |
| `npm run test`           | Run tests                                                                |
| `npm run lint`           | Run JavaScript and LESS linter                                           |
| `npm run lint:js`        | Run JavaScript linter                                                    |
| `npm run lint:less`      | Run LESS linter                                                          |
| `npm rum test-ci`        | Run Jest test and upload code to CodeCov.io                              |

## See also

- [React-Bootstrap-Started-Kit](https://github.com/baoduy/React-Bootstrap-Started-Kit)
