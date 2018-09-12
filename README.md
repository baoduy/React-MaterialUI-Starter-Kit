# React Material Starter Kit

[![CircleCI](https://circleci.com/gh/baoduy/React-MaterialUI-Started-Kit.svg?style=svg)](https://circleci.com/gh/baoduy/React-MaterialUI-Started-Kit)
[![codecov](https://codecov.io/gh/baoduy/React-MaterialUI-Started-Kit/branch/develop/graph/badge.svg)](https://codecov.io/gh/baoduy/React-MaterialUI-Started-Kit) [![Greenkeeper badge](https://badges.greenkeeper.io/baoduy/React-MaterialUI-Started-Kit.svg)](https://greenkeeper.io/)
[![Open Source Helpers](https://www.codetriage.com/baoduy/react-materialui-started-kit/badges/users.svg)](https://www.codetriage.com/baoduy/react-materialui-started-kit)
[![PeerDependencies](https://img.shields.io/david/peer/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit?type=peer)
[![Dependencies](https://img.shields.io/david/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit)
[![DevDependencies](https://img.shields.io/david/dev/baoduy/React-MaterialUI-Started-Kit.svg)](https://david-dm.org/baoduy/React-MaterialUI-Started-Kit?type=develop)

The PRD really starter kit for **ReactJs** with hot module replacement (HMR) for rapid development.

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
- **[Babel](http://babeljs.io/)** (7.x)
- **[JSS](http://cssinjs.org/?v=v9.8.7)** this is Css in Jss, the powerfull tool to develop Css using Js. The tool is using natively by Material UI.
- **[LESS](http://lesscss.org/)** for style-sheet development. if you don't want to use Jss.
- **[SCSS](https://sass-lang.com/)** for style-sheet development. if you don't want to use Jss.
- **[Jest](https://facebook.github.io/jest/)** - Testing framework for React applications
- **[Image Loader](https://github.com/vanwagonet/img-loader)** to loading and minify the images.
- **[Redux](https://redux.js.org/)** Manage the Component states.
- **[Redux-Thunk](https://github.com/reduxjs/redux-thunk)** The middle-ware of Redux
- **[Redux-toolbelt](https://github.com/welldone-software/redux-toolbelt)** A set of tools for quicker, easier, less verbose and safer Redux development by [welldone-software](http://welldone-software.com/).
- **[request-promise](https://github.com/request/request-promise)** and **[request](https://github.com/request/request)** for WebApi communication.

- **ESLINT** for Javascript and ReactJs coding best practises.
- Code quality (linting) for JavaScript and LESS/CSS.

- This project also using **babel-runtime** and **babel-plugin-transform-runtime** to speperate the commonns functions to the other modules to reduce the size of the js files. Refer [here](babel-plugin-transform-runtime) for details.

## Convert Tools

- Css to Jss [here](https://github.com/cssinjs/cli)
- Css to LESS [here](http://kronus.me/cn/css2less/) in case you don't like Jss.
- LESS to SCSS [here](http://less2scss.awk5.com/).

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

## Installation

1.  Clone/download repo
2.  `npm install`
3.  Replace the CodeCov.io token to your one in the `package.json` file.
4.  Run `npm start` to run the project.

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

## Details Documentation

The details documents is being added into docs folder and hosted in [here](https://baoduy.github.io/React-MaterialUI-Starter-Kit/).

## All commands

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
