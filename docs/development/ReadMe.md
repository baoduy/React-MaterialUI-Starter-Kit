# Run & Package

## Development

`npm run start-dev`

- Build app continously (HMR enabled)
- App served @ `http://localhost:8080`

## Production

`npm run start-prod`

- Build app once (HMR disabled)
- App served @ `http://localhost:3000`

## Webpack Bundle Analysis

`npm run start-analysis`

- Analysis served @ `http://localhost:8888`

## async/await

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
