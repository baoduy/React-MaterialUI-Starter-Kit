# Webpack Strip Block

Webpack loader to strip blocks of code marked by special comment tags. Useful for removing code that you don't want in your production webpack bundle (e.g. verbose console warnings, etc).

Example:
In your client js source files:

```javascript
var makeFoo(bar, baz) {
    // The following code will be stripped with our webpack loader
    /* develblock:start */
    if (bar instanceof Bar !== true) {
        throw new Error('makeFoo: bar param is required and must be instance of Bar');
    }
    /* develblock:end */

    // This code would remain
    return new Foo(bar, baz);
}
```

## Uninstall Webpack Strip Block

1. Run the _npm uninstall —save-dev_ for all below packages:

   - webpack-strip-block

2. Remove the below LESS config blog from Webpack config in **configs\webpack\common.js** file:

   ```json
   {
        "test": /\.(js|jsx|ts|tsx)$/,
        "enforce": 'pre',
        //exclude: /(node_modules|bower_components|\.spec\.js)/,
        "use": ['webpack-strip-block']
    },
   ```

3. Remove all code blocks which starting with `/* develblock:start */` and end with `/* develblock:end */`
