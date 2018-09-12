# LESS

The project is supporting to develop the stylesheet with LESS. All the less files should be placed under **src\assets\less** folder and the LESS import should be in the **src\index.js** file.

## Syntax validation

There is a command had been added to the package.json file which helps to verify the LESS best practices syntax.

run `npm run lint` or `npm run lint-less`

## Stylesheet Bundling

When packaging the application for Production all stylesheet files _(CSS, LESS and SCSS)_ will be bundled to a single file named **style.css** by the Webpack and storing in the **dist** folder.

## Uninstall LESS

LESS support is one of stylesheet development option which supporting by this Starter kid. If you want to use the other stylesheet development options like CSS or SCSS and want to uninstall all LESS related things then follow steps will show you How to remove LESS from this project.

1. Run the _npm uninstall —save-dev_ for all below packages:
   - less
   - less-loader
   - lesshint
2. Remove the below LESS config blog from Webpack config in **configs\webpack\common.js** file:

   ```json
   {
     "test": /\.less$/,
     "use": [
       devMode ? "style-loader" : ExtractCssChunks.loader,
       {
         "loader": "css-loader",
         "options": { "url": false, "sourceMap": false }
       },
       "postcss-loader",
       {
         "loader": "less-loader",
         "options": {
           "relativeUrls": false,
           "sourceMap": false
         }
       }
     ]
   }
   ```

3. Remove the **less** folder from **scr\asserts**
4. Remove the LESS scripts at in **package.json** file.

```json
"scripts": {
    //This is for LESS compilation checking purpose. Remove it if not inuse.
    "build-less": "lessc ./src/assets/less/material-dashboard-react.less ./src/assets/less/material-dashboard-react.css",
    //Remove the **lint-less** fron this command
    "lint": "npm-run-all lint-js lint-less",
    //Remove this line
    "lint-less": "lesshint ./src/assets/less",
  }
```

## Samples

There is a sample LESS file named **material-dashboard-react.less** had been added into the project under **scr\asserts** folder which importing to the application in the **index.jsx** file.

```javascript
//Style-sheets
import './assets/less/material-dashboard-react.less';
```
