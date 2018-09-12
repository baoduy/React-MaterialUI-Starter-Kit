# Typescript

This project allows to develop some commonds javascript with Typescript which helping to minimize the common issue of coding.
You can find the Typescript sample in \*\*src\commons\commonFuncs.ts, and you also able to import the js modules to the Typescript file as well.

## Uninstall Typescript

1. Run the _npm uninstall —save-dev_ for all below packages:
   - awesome-typescript-loader
   - typescript
   - and all packages have name started with `@types`.
2. Remove the below LESS config blog from Webpack config in **configs\webpack\common.js** file:

   ```json
   {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
   ```

3. Remove the **tsconfig.json** and **tsconfig.test.json** files.
4. Convert all .ts and .tsx files to .js and .jsx.
