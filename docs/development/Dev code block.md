# webpack-remove-block-loader

The `webpack-remove-block-loader` is Webpack loader to strip blocks of code marked by special comment tags. Useful for removing code that you don't want in your production webpack bundle (e.g. verbose console warnings, etc).

Example: the code in side `/* PrdDeletion:start */` and `/* PrdDeletion:end */` will be removed in PRD bundle.

```javascript
  /* devblock:start */
  console.log(`base URL is ${base}`);
  /* devblock:end */
}
```

## Uninstall Webpack Strip Block

1. Run the _npm uninstall —save-dev_ for all below packages:

   - webpack-strip-block

2. Remove the below LESS config blog from Webpack config in **configs\webpack\common.js** file:

   ```json
   {
        "test": /\.(js|jsx|ts|tsx)$/,
        //exclude: /node_modules/,
        "use": [
          {
            "loader": 'webpack-remove-block-loader',
            "options": {
              "active": !devMode,
            }
          }
        ]
    },
   ```

3. Remove all code blocks which starting with `/* develblock:start */` and end with `/* develblock:end */`
