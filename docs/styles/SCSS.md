# SCSS

The project is support to develop the stylesheet with SCSS. All the scss files should be placed under **src\assets\scss** folder and the SCSS import should be in the **src\index.js** file.

## Syntax validation

There is a command had been added to the package.json file which helping to verify the SCSS best practices syntax.
before running below command ensure the sass-lint is installed globally ny command `sass-lint-install`.

run `npm run lint` or `npm run lint-scss`

## Convert Tools

- LESS to SCSS [here](http://less2scss.awk5.com/).

## Stylesheet Bundling

When packaging the application for Production all stylesheet files _(css, LESS and SCSS)_ will be bundled to a single file named **style.css** by the Webpack and storing in the **dist** folder.

## Uninstall SCSS

SCSS support is one of stylesheet development option which supporting by this Starter kid. If you want to using the other stylesheet development options like CSS or SCSS and want to uninstall all SCSS related things then follow steps will show you How to remove SCSS from this project.

1. Run the _npm uninstall —save-dev_ for all below packages:
   - node-sass
   - sass-loader
2. Remove the below SCSS config blog from Webpack config in **configs\webpack\common.js** file:

   ```json
   {
     "test": /\.scss$/,
     "use": [
       devMode ? "style-loader" : ExtractCssChunks.loader,
       "css-loader",
       "postcss-loader",
       "sass-loader"
     ]
   }
   ```

3. Remove the **scss** folder from **scr\asserts**
4. Remove the SCSS scripts at in **package.json** file.

```json
"scripts": {
    //Remove **lint-scss** from this command
     "lint": "npm-run-all lint-js lint-scss",
    //Remove this line
    "lint-scss": "sass-lint 'src/**/*.scss' -v -q",
   //Remove this line
    "sass-lint-install": "npm install -g sass-lint",
  }
```

## Samples

There is an sample SCSS file named **material-dashboard-react.scss** had been added into the project under **scr\asserts** folder which importing to the application in the **index.jsx** file.

```javascript
//Style-sheets
import './assets/scss/material-dashboard-react.scss';
```
